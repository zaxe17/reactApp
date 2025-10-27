import { useState } from "react";
import { motion } from "framer-motion";

const Feedback = () => {
	const [status, setStatus] = useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setStatus("Sending...");

		const formData = new FormData(event.target);
		const capitalizeWords = (str) => str.replace(/\b\w/g, (char) => char.toUpperCase());

		const rawName = formData.get("name").trim();
		const userName = capitalizeWords(rawName);

		formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);
		// formData.append("access_key", "1ce992dc-25b6-4b14-8f12-b1285416b1f7");
		formData.append("subject", "New Feedback from Website");
		formData.append("from_name", `${userName} Feedback Message`);
		formData.append("replyto", "email");

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		try {
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: json,
			}).then((res) => res.json());

			if (res.success) {
				setStatus(
					"✅ Thank you! Your message has been sent successfully."
				);
				event.target.reset();
			} else {
				setStatus("❌ Something went wrong. Please try again.");
			}
		} catch (error) {
			setStatus("⚠️ Network error. Please try again later.");
		}
	};

	return (
		<div className="flex justify-center">
			<form
				onSubmit={onSubmit}
				className="w-1/2 bg-neutral-900 p-8 rounded-2xl shadow-lg flex flex-col gap-4">
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					required
					className="p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<input
					type="email"
					name="email"
					placeholder="example@gmail.com"
					required
					className="p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<textarea
					name="message"
					placeholder="Type your message..."
					required
					rows="4"
					className="p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>

				<button
					type="submit"
					className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-lg transition">
					Submit Feedback
				</button>

				{status && (
					<p
						className={`text-center mt-3 text-sm ${
							status.startsWith("✅")
								? "text-green-400"
								: status.startsWith("❌")
								? "text-red-400"
								: "text-yellow-400"
						}`}>
						{status}
					</p>
				)}
			</form>
		</div>
	);
};

export default Feedback;
