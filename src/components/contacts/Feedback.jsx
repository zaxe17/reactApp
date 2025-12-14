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
		const name = capitalizeWords(rawName);
		const email = formData.get("email")?.trim() || "";
		const message = formData.get("message")?.trim() || "";

		if (!name || !email || !message) {
			setStatus("❌ All fields are required.");
			setIsSubmitting(false);
			return;
		}

		let web3Success = false;
		let mongoSuccess = false;

		try {
			/* ===============================
			   1️⃣ WEB3FORMS (EMAIL)
			   =============================== */
			try {
				const web3Res = await fetch(
					"https://api.web3forms.com/submit",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
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

				if (!web3Success) {
					console.error("Web3Forms error:", web3Result);
				}
			} catch (err) {
				console.error("Web3Forms request failed:", err);
			}

			/* ===============================
			   2️⃣ MONGODB BACKEND
			   =============================== */
			try {
				const mongoRes = await fetch("/api/feedback", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ name, email, message }),
				});

				if (mongoRes.ok) {
					const mongoResult = await mongoRes.json();
					mongoSuccess = mongoResult.success;
					if (!mongoSuccess) {
						console.error(
							"MongoDB save failed:",
							mongoResult
						);
					}
				} else {
					console.error(
						"MongoDB API error:",
						mongoRes.status
					);
				}
			} catch (err) {
				console.error("MongoDB request failed:", err);
			}

			/* ===============================
			   3️⃣ FINAL STATUS MESSAGE
			   =============================== */
			if (web3Success && mongoSuccess) {
				setStatus(
					"✅ Thank you! Your message was sent and saved successfully."
				);
				event.target.reset();
			} else if (web3Success && !mongoSuccess) {
				setStatus(
					"⚠️ Email sent, but database save failed. We still received your message."
				);
				event.target.reset();
			} else if (!web3Success && mongoSuccess) {
				setStatus(
					"⚠️ Message saved, but email notification failed. We still received your message."
				);
				event.target.reset();
			} else {
				setStatus(
					"❌ Failed to process your message. Please try again later."
				);
			}
		} catch (err) {
			console.error("Unexpected submit error:", err);
			setStatus(
				"⚠️ Network error. Please check your connection."
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="flex justify-center px-4">
			<form
				onSubmit={onSubmit}
				className="w-full max-w-lg bg-neutral-900 p-8 rounded-2xl shadow-lg flex flex-col gap-4 text-white"
			>
				<h2 className="text-2xl font-bold text-center">
					Send Feedback
				</h2>

				<input
					name="name"
					placeholder="Your Name"
					required
					className="p-3 rounded bg-neutral-800"
				/>

				<input
					name="email"
					type="email"
					placeholder="Email"
					required
					className="p-3 rounded bg-neutral-800"
				/>

				<textarea
					name="message"
					placeholder="Message"
					required
					className="p-3 rounded bg-neutral-800"
				/>

				<button
					type="submit"
					disabled={isSubmitting}
					className="bg-blue-600 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
				>
					{isSubmitting ? "Submitting..." : "Submit"}
				</button>

				{status && (
					<p className="text-center text-sm">{status}</p>
				)}
			</form>
		</div>
	);
};

export default Feedback;
