import { skills } from "../constants";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SkillBar = ({ level }) => {
	const ref = useRef(null);
	const inView = useInView(ref); // true kapag visible
	const [count, setCount] = useState(0);

	useEffect(() => {
		let timer;
		if (inView) {
			let start = 0;
			const duration = 1500;
			const increment = level / (duration / 16);

			timer = setInterval(() => {
				start += increment;
				if (start >= level) {
					setCount(level);
					clearInterval(timer);
				} else {
					setCount(Math.floor(start));
				}
			}, 16);
		} else {
			setCount(0); // reset kapag out of view
		}

		return () => clearInterval(timer);
	}, [inView, level]);

	return (
		<span ref={ref} className="lg:text-sm text-xs text-white">
			{count}%
		</span>
	);
};

const Skills = () => {
	return (
		<div className="border-b border-purple-500 pb-8">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="my-20 text-center text-4xl">
				My <span className="text-neutral-500">Skills</span>
			</motion.h2>

			<div className="flex flex-wrap justify-center gap-10">
				{skills.map((column, index) => {
					const isFrontend = column.category === "Front-end";

					return (
						<div key={index} className="w-full sm:w-1/4 lg:w-2/5">
							<motion.h3
								whileInView={{ opacity: 1, x: 0 }}
								initial={{
									opacity: 0,
									x: isFrontend ? -100 : 100,
								}}
								transition={{ duration: 1 }}
								className="text-xl lg:text-3xl text-center mb-6 uppercase">
								{column.category}
							</motion.h3>

							<motion.div
								whileInView={{
									opacity: 1,
									x: 0,
									transition: { duration: 1.5 },
								}}
								initial={{
									opacity: 0,
									x: isFrontend ? -100 : 100,
								}}
								whileHover={{
									scale: 1.02,
									transition: {
										duration: 0.3,
										ease: "easeInOut",
									},
								}}
								animate={{
									scale: 1,
									transition: {
										duration: 0.3,
										ease: "easeInOut",
									},
								}}
								className="bg-neutral-900 p-6 rounded-lg shadow-lg">
								{column.skills.map((skill, idx) => (
									<div key={idx} className="lg:mb-8 mb-5">
										<h3 className="lg:text-lg text-base mb-2 text-purple-600">
											{skill.name}
										</h3>

										<div className="w-full p-1 rounded-full border-2 lg:border-4 border-purple-500">
											<motion.div
												whileInView={{
													width: `${skill.level}%`,
												}}
												initial={{ width: 0 }}
												transition={{ duration: 1.5 }}
												className=" bg-purple-500 rounded-full flex items-center justify-end px-1 overflow-hidden">
												<SkillBar level={skill.level} />
											</motion.div>
										</div>
									</div>
								))}
							</motion.div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;
