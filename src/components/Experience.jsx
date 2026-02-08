import { EXPERIENCES } from "../constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView({
		triggerOnce: false,
		threshold: 0.1,
	});

	return (
		<div className="border-b border-purple-500 pb-4">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="my-20 text-center text-4xl">
				Experience
			</motion.h2>
			<div className="relative">
				<motion.div
					ref={ref}
					className="absolute border-l-2 border-purple-700 -left-4 lg:left-1/3 transform -translate-x-1/2 h-full"
					whileInView={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					transition={{ duration: 1 }} />
				{EXPERIENCES.map((experience, index) => (
					<div
						key={index}
						className="group mb-8 flex flex-wrap lg:justify-center relative">
						<motion.div
							className="absolute my-5 -left-4 lg:left-1/3 transform -translate-x-1/2 h-4 w-4 rounded-full bg-purple-700/40 backdrop-blur-md border border-white/20 shadow-lg shadow-purple-900/30 lg:group-hover:bg-white/20 lg:group-hover:border-white/40 lg:group-hover:shadow-fuchsia-500/40 transition-all ease-in-out duration-300"
							whileInView={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							transition={{ duration: 1 }}
						/>
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
							<h1 className="mb-2 font-semibold text-xl">
								{experience.role}
								<span className="text-sm text-purple-100">
									{experience.company}
								</span>
							</h1>
							<p className="mb-4 text-neutral-400 transition-all duration-300 ease-in-out lg:group-hover:text-neutral-200">
								{experience.description}
							</p>
							<div className="flex flex-wrap select-none">
								{experience.technologies.map((tech, index) => (
									<span
										key={index}
										className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 transition-all ease-in-out duration-300 hover:text-fuchsia-500 hover:bg-fuchsia-500/10 hover:shadow-fuchsia-shadow lg:group-hover:text-fuchsia-500 lg:group-hover:bg-fuchsia-500/10 lg:group-hover:shadow-fuchsia-shadow">
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
