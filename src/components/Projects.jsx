import { PROJECTS } from "../constants";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
						className="mb-8 flex flex-wrap lg:justify-center">
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1 }}
							className="w-full lg:w-1/4">
							<div className="w-full max-h-[250]">
								<motion.img
									key={project.image[current[index]]}
									src={project.image[current[index]]}
									alt={project.title}
									className="lg:w-[250px] mb-6 rounded duration-300 ease-in-out"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 3 }}
								/>
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
							<p className="mb-4 text-neutral-400 ">
								{project.description}
							</p>
							<a
								href={project.link}
								className="block mb-2 text-purple-500 transition-all ease-in-out duration-200 hover:text-purple-300">
								{project.link}
							</a>
							<div className="flex flex-wrap">
								{project.technologies.map((tech, index) => (
									<span
										key={index}
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
