import { skills } from "../constants";
import { motion } from "framer-motion";

const Skills = () => {
    return (
		<div className="border-b border-purple-500 pb-8">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="my-20 text-center text-4xl">
				My
				<span className="text-neutral-500">Skills</span>
			</motion.h2>
			<div className="flex flex-wrap justify-center gap-10">
				{skills
					.filter((column) => column.category === "Front-end")
					.map((column, index) => (
						<div
							key={index + skills.length}
							className="w-full sm:w-1/4 lg:w-2/5">
							<motion.h3
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: -100 }}
								transition={{ duration: 1 }}
								className="text-xl lg:text-3xl text-center mb-6 uppercase">
								{column.category}
							</motion.h3>
							<motion.div
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: -100 }}
								transition={{ duration: 1.5 }}
								className="bg-neutral-800 p-6 rounded-lg shadow-lg">
								{column.skills.map((skill, idx) => (
									<div key={idx} className="progress lg:mb-8 mb-5">
										<h3 className="lg:text-lg text-base flex items-center mb-2 text-purple-600">
											{skill.name}
											<span className="ml-auto text-gray-400">
												{skill.level}%
											</span>
										</h3>
										<div className="w-full lg:h-6 h-4 p-1 rounded-[10px] border-2 lg:border-4 border-purple-500">
											<motion.div
												whileInView={{
													opacity: 1,
													width: `${skill.level}%`,
												}}
												initial={{
													opacity: 1,
													width: 0,
												}}
												transition={{ duration: 1.5 }}
												className="h-full bg-purple-500 rounded-md"></motion.div>
										</div>
									</div>
								))}
							</motion.div>
						</div>
					))}

				{skills
					.filter((column) => column.category === "Back-end")
					.map((column, index) => (
						<div
							key={index + skills.length}
							className="w-full sm:w-1/4 lg:w-2/5">
							<motion.h3
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: 100 }}
								transition={{ duration: 1 }}
								className="text-xl lg:text-3xl text-center mb-6 uppercase">
								{column.category}
							</motion.h3>
							<motion.div
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: 100 }}
								transition={{ duration: 1.5 }}
								className="bg-neutral-800 p-6 rounded-lg shadow-xl">
								{column.skills.map((skill, idx) => (
									<div key={idx} className="progress lg:mb-8 mb-5">
										<h3 className="lg:text-lg text-base flex items-center mb-2 text-purple-600">
											{skill.name}
											<span className="ml-auto text-gray-400">
												{skill.level}%
											</span>
										</h3>
										<div className="w-full lg:h-6 h-4 p-1 rounded-[10px] border-2 lg:border-4 border-purple-500">
											<motion.div
												whileInView={{
													opacity: 1,
													width: `${skill.level}%`,
												}}
												initial={{
													opacity: 1,
													width: 0,
												}}
												transition={{ duration: 1.5 }}
												className="h-full bg-purple-500 rounded-md"></motion.div>
										</div>
									</div>
								))}
							</motion.div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Skills;
