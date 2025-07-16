import aboutImg from "../assets/jacolbia_about.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
	return (
		<div className="border-b border-purple-500 pb-4">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="my-20 text-center text-4xl">
				About
				<span className="text-neutral-500">Me</span>
			</motion.h2>
			<div className="flex flex-wrap">
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 1.5 }}
					className="w-full lg:w-1/2 lg:p-8">
					<div className="flex items-center justify-center">
						<div className="relative rounded-2xl overflow-hidden">
							<img
								className="rounded-2xl select-none"
								src={aboutImg}
								alt="about_image"
								width={500}
							/>
							<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
						</div>
					</div>
				</motion.div>
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 100 }}
					transition={{ duration: 1 }}
					className="w-full lg:w-1/2 flex justify-center items-center">
					<div className="flex justify-center lg:justify-start">
						<p className="my-2 max-w-xl py-6 text-justify">
							{ABOUT_TEXT}
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
