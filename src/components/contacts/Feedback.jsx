import { useState } from "react";

const Feedback = () => {
	const [status, setStatus] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onSubmit = async (event) => {
		event.preventDefault();
		setStatus("Sending...");
		setIsSubmitting(true);

		const formData = new FormData(event.target);
		const capitalizeWords = (str) =>
			str.replace(/\b\w/g, (char) => char.toUpperCase());

		const rawName = formData.get("name")?.trim() || "";
		const userName = capitalizeWords(rawName);
		const email = formData.get("email")?.trim() || "";
		const message = formData.get("message")?.trim() || "";

		if (!userName || !email || !message) {
			setStatus("❌ All fields are required.");
			setIsSubmitting(false);
			return;
		}

		const web3Data = {
			access_key: import.meta.env.VITE_ACCESS_KEY,
			subject: "New Feedback from Website",
			from_name: `${userName} Feedback Message`,
			replyto: email,
			name: userName,
			email,
			message,
		};

		let web3Success = false;
		let mongoSuccess = false;

		try {
			// 1️⃣ Web3Forms
			try {
				const web3Res = await fetch(
					"https://api.web3forms.com/submit",
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(web3Data),
					}
				);
				const web3Result = await web3Res.json();
				web3Success = web3Result.success;
				if (!web3Success) console.error("Web3Forms error:", web3Result);
			} catch (err) {
				console.error("Web3Forms request failed:", err);
			}

			// 2️⃣ MongoDB Backend
			try {
				const mongoRes = await fetch("/api/feedback", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ name: userName, email, message }),
				});
				if (!mongoRes.ok)
					console.error(
						"MongoDB API returned error:",
						mongoRes.status
					);
				else {
					const mongoResult = await mongoRes.json();
					mongoSuccess = mongoResult.success;
					if (!mongoSuccess)
						console.error(
							"MongoDB save failed:",
							mongoResult.error
						);
				}
			} catch (err) {
				console.error("MongoDB request failed:", err);
			}

			// ✅ Status messages
			if (web3Success && mongoSuccess) {
				setStatus(
					"✅ Thank you! Your message was sent and saved successfully."
				);
				event.target.reset();
			} else if (web3Success && !mongoSuccess) {
				setStatus(
					"⚠️ Email sent, but database save failed. We received your message!"
				);
			} else if (!web3Success && mongoSuccess) {
				setStatus(
					"⚠️ Message saved to database, but email notification failed. We received your message!"
				);
			} else {
				setStatus(
					"❌ Failed to process your message. Please try again or contact support."
				);
			}
		} catch (err) {
			console.error("Unexpected error submitting feedback:", err);
			setStatus(
				"⚠️ Network error. Please check your connection and try again."
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="flex justify-center px-4">
			<form
				onSubmit={onSubmit}
				className="w-full max-w-lg bg-neutral-900 p-8 rounded-2xl shadow-lg flex flex-col gap-4 text-white">
				<h2 className="text-2xl font-bold text-center mb-2">
					Send Feedback
				</h2>
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					required
					disabled={isSubmitting}
					className="p-3 rounded-lg bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
				/>
				<input
					type="email"
					name="email"
					placeholder="example@gmail.com"
					required
					disabled={isSubmitting}
					className="p-3 rounded-lg bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
				/>
				<textarea
					name="message"
					placeholder="Type your message..."
					required
					rows="4"
					disabled={isSubmitting}
					className="p-3 rounded-lg bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none disabled:opacity-50"></textarea>
				<button
					type="submit"
					disabled={isSubmitting}
					className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed">
					{isSubmitting ? "Submitting..." : "Submit Feedback"}
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
