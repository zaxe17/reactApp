import { motion } from "framer-motion";

const Spotify = () => {
	return (
		<div className="border-b border-neutral-900 pb-10">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="my-20 text-center text-4xl">
				Spotify
			</motion.h2>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 1.5 }}
				className="flex items-center justify-center">
				<iframe
					className="lg:w-3/4 h-[20rem] lg:h-[30rem] rounded-3xl"
					src="https://open.spotify.com/embed/playlist/61xN4A5OcgzPPAsHIZpE8G?utm_source=generator"
					allowFullScreen
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				/>
			</motion.div>
		</div>
	);
};

export default Spotify;
