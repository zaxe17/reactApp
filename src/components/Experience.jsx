import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
	return (
		<div className="border-b border-neutral-900 pb-4">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="my-20 text-center text-4xl">
				Experience
			</motion.h2>
			<div className="relative">
				<motion.div
					className="absolute border-l-2 border-purple-700 -left-4 lg:left-1/3 transform -translate-x-1/2"
					whileInView={{
						opacity: 1,
						height: "100%",
					}}
					initial={{
						opacity: 1,
						height: 0,
					}}
					transition={{ duration: 5 }}></motion.div>
				{EXPERIENCES.map((experience, index) => (
					<div
						key={index}
						className="mb-8 flex flex-wrap lg:justify-center relative">
						<motion.div
							className="absolute border-2 border-black my-5 -left-4 lg:left-1/3 transform -translate-x-1/2 h-4 w-4 rounded-full bg-purple-700"
							whileInView={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							transition={{ duration: 1, delay: 0.5 }}></motion.div>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1 }}
							className="w-full lg:w-1/4">
							<p className="my-5 mb-2 text-sm text-neutral-400">
								{experience.year}
							</p>
						</motion.div>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 1.5 }}
							className="relative w-full max-w-xl lg:w-3/4">
							<h6 className="mb-2 font-semibold ">
								{experience.role}
								<span className="text-sm text-purple-100">
									{experience.company}
								</span>
							</h6>
							<p className="mb-4 text-neutral-400">
								{experience.description}
							</p>
							<div className="flex flex-wrap">
								{experience.technologies.map((tech, index) => (
									<span
										key={index}
										className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 transition-all ease-in-out duration-200 hover:text-purple-400 sm:hover:shadow-fuchsia-shadow">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
