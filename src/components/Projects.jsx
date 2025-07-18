import { PROJECTS } from "../constants";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
	const [current, setCurrent] = useState(Array(PROJECTS.length).fill(0));

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prevIndexes) =>
				prevIndexes.map((index, i) =>
					PROJECTS[i].image.length > 1
						? (index + 1) % PROJECTS[i].image.length
						: index
				)
			);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="border-b border-purple-500 pb-4">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="my-20 text-center text-4xl">
				Projects
			</motion.h2>
			<div>
				{PROJECTS.map((project, index) => (
					<div
						key={index}
						className="mb-8 flex flex-wrap lg:justify-center gap-x-32">
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1 }}
							className="w-full lg:w-1/4 flex justify-center">
							<div className="w-full aspect-[4/2] relative overflow-hidden rounded-xl mb-6">
								<AnimatePresence mode="sync">
									<motion.img
										key={project.image[current[index]]}
										src={project.image[current[index]]}
										alt={project.title}
										className="absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{
											duration: 1.5,
											ease: "easeInOut",
										}}
									/>
								</AnimatePresence>
							</div>
						</motion.div>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 1 }}
							className="w-full max-w-xl lg:w-3/4">
							<h6 className="mb-2 font-semibold">
								{project.title}
							</h6>
							<p className="mb-4 text-neutral-400">
								{project.description}
							</p>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="block mb-2 text-purple-900 transition-all ease-in-out duration-200 hover:text-purple-500 w-fit select-none">
								{project.link}
							</a>
							<div className="flex flex-wrap select-none">
								{project.technologies.map((tech, techIndex) => (
									<span
										key={techIndex}
										className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 transition-all ease-in-out duration-200 hover:text-purple-500 sm:hover:shadow-fuchsia-shadow">
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

export default Projects;
