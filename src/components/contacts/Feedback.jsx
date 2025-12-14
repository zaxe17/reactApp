import { useState } from "react";
import { motion } from "framer-motion";

const Feedback = () => {
	const [status, setStatus] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onSubmit = async (event) => {
		event.preventDefault();
		setIsSubmitting(true);

		const formData = new FormData(event.target);

		const capitalizeWords = (str) =>
			str.replace(/\b\w/g, (char) => char.toUpperCase());

		const rawName = formData.get("name")?.trim() || "";
		const name = capitalizeWords(rawName);
		const email = formData.get("email")?.trim() || "";
		const message = formData.get("message")?.trim() || "";

		if (!name || !email || !message) {
			setStatus("All fields are required.");
			setIsSubmitting(false);
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setStatus("Please enter a valid email address.");
			setIsSubmitting(false);
			return;
		}

		let web3Success = false;
		let mongoSuccess = false;

		try {
			try {
				const web3Res = await fetch(
					"https://api.web3forms.com/submit",
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							access_key: import.meta.env.VITE_ACCESS_KEY,
							subject: "New Feedback from Website",
							from_name: `${name} Feedback Message`,
							replyto: email,
							name,
							email,
							message,
						}),
					}
				);

				const web3Result = await web3Res.json();
				web3Success = web3Result.success;

				if (!web3Success) console.error("Web3Forms error:", web3Result);
			} catch (err) {
				console.error("Web3Forms request failed:", err);
			}

			try {
				const mongoRes = await fetch("/api/feedback", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ name, email, message }),
				});

				const mongoResult = await mongoRes.json();

				if (mongoRes.ok && mongoResult.success) {
					mongoSuccess = true;
				} else {
					mongoSuccess = false;
					console.error(
						"MongoDB save failed:",
						mongoResult.error || mongoRes.status
					);
				}
			} catch (err) {
				mongoSuccess = false;
				console.error("MongoDB request failed:", err);
			}

			if (web3Success && mongoSuccess) {
				setStatus(
					"Thank you for sharing your thoughts!"
				);
				event.target.reset();
			} else if (web3Success && !mongoSuccess) {
				setStatus(
					"Email sent, but database save failed. We still received your message."
				);
				event.target.reset();
			} else if (!web3Success && mongoSuccess) {
				setStatus(
					"Message saved, but email notification failed. We still received your message."
				);
				event.target.reset();
			} else {
				setStatus(
					"Failed to process your message. Please try again later."
				);
			}
		} catch (err) {
			console.error("Unexpected submit error:", err);
			setStatus("Network error. Please check your connection.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="flex justify-center">
			<motion.form
				whileInView={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				transition={{ duration: 1 }}
				onSubmit={onSubmit}
				className="lg:w-1/2 bg-neutral-900 p-8 rounded-2xl shadow-lg flex flex-col gap-4"
				noValidate>
				<h2 className="text-2xl font-bold text-center">
					Send Feedback
				</h2>

				<input
					name="name"
					placeholder="Your Name"
					required
					className="p-3 rounded bg-neutral-700 focus:outline-none"
				/>

				<input
					name="email"
					type="email"
					placeholder="Email"
					required
					className="p-3 rounded bg-neutral-700 focus:outline-none"
				/>

				<textarea
					name="message"
					placeholder="Message"
					required
					className="p-3 rounded bg-neutral-700 resize-none focus:outline-none"
				/>

				<button
					type="submit"
					disabled={isSubmitting}
					className="bg-purple-800 py-2 rounded hover:bg-purple-600 disabled:opacity-50 transition-all duration-300 ease-in-out">
					{isSubmitting ? "Submitting..." : "Submit"}
				</button>

				{status && <p className="text-center text-sm">{status}</p>}
			</motion.form>
		</div>
	);
};

export default Feedback;
