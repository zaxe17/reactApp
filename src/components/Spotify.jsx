import { motion } from "framer-motion";
import { spotifyLink } from "../constants";

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
				whileInView={{ opacity: 1, scale: 1, y: 0 }}
				initial={{ opacity: 0, scale: 0.8, y: 100 }}
				transition={{ duration: 1 }}
				className="flex items-center justify-center">
				<iframe
					className="lg:w-3/4 h-96 lg:h-[35rem] rounded-3xl transition-shadow ease duration-500 hover:shadow-purple-shadow"
					src={spotifyLink}
					allowFullScreen
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				/>
			</motion.div>
		</div>
	);
};

export default Spotify;
