import { HERO_CONTENT, button } from "../constants";
import profilePic from "../assets/jacolbia.png";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

/* SET ANIMATION FROM FIRST PAGE */
const container = (delay) => ({
	hidden: { x: -100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5, delay: delay },
	},
});

const Hero = () => {
	/* TYPEWRITER ANIMATION */
	const [text] = useTypewriter({
		words: ["Frontend Developer", "Backend Developer"],
		loop: {},
	});

	return (
		<div className="border-b border-purple-500 pb-4 lg:mb-35">
			<div className="flex flex-wrap">
				{/* CONTENT FROM LEFT */}
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col items-start">
						{/* NAME */}
						<motion.h1
							variants={container(0)}
							initial="hidden"
							animate="visible"
							className="pb-10 lg:pb-0 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
							Jan Marc Jacolbia
						</motion.h1>
						{/* DISPLAY WORD FROM TYPEWRITER */}
						<motion.span
							variants={container(0.5)}
							initial="hidden"
							animate="visible"
							className="bg-gradient-to-r from-fuchsia-500 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent pb-4">
							I'm a <span>{text}</span>
							<Cursor cursorColor="violet" />
						</motion.span>
						{/* TEXT CONTENT */}
						<motion.p
							variants={container(1)}
							initial="hidden"
							animate="visible"
							className="my-2 max-w-xl py-6 font-light tracking-tighter text-xl">
							{HERO_CONTENT}
						</motion.p>
						{/* BUTTON CONTENT */}
						<motion.div
							className="flex items-center justify-center gap-6 lg:gap-10 mb-10 lg:my-10 font-thin tracking-[5px]"
							variants={container(1.5)}
							initial="hidden"
							animate="visible">
							{button.map((btn, index) => (
								<motion.button
									key={index}
									className="px-5 lg:px-15 py-2 lg:py-3 rounded-md relative radial-gradient cursor-pointer"
									initial={{ "--x": "100%", scale: 1 }}
									animate={{ "--x": "-100%" }}
									whileTap={{ scale: 0.97 }}
									transition={{
										delay: index,
										repeat: Infinity,
										repeatType: "loop",
										repeatDelay: 1,
										type: "spring",
										stiffness: 20,
										damping: 15,
										mass: 2,
										scale: {
											type: "spring",
											stiffness: 10,
											damping: 5,
											mass: 0.1,
										},
									}}
									onClick={() =>
										(window.location.href = btn.link)
									}>
									<span className="text-neutral-100 font-light h-full w-full block relative linear-mask text-[10px] lg:text-lg uppercase text-shadow-white">
										{btn.label}
									</span>
									<span className="block absolute inset-0 rounded-md p-px linear-overlay" />
								</motion.button>
							))}
						</motion.div>
					</div>
				</div>
				<div className="w-full lg:w-1/2 lg:p-8">
					<motion.div
						className="flex justify-center lg:justify-center"
						initial={{ x: 100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 1.2 }}>
						<div className="relative rounded-2xl overflow-hidden">
							<img
								className="object-cover"
								src={profilePic}
								alt="Profile"
								width={570}
							/>
							<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
