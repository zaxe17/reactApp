import { useState } from "react";
import { motion } from "framer-motion";

const Feedback = () => {
	const [status, setStatus] = useState("");
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Frontend validation
	const validateForm = (name, email, message) => {
		const newErrors = {};

		// Name validation
		if (!name.trim()) {
			newErrors.name = "Name is required";
		} else if (name.trim().length < 2) {
			newErrors.name = "Name must be at least 2 characters";
		} else if (name.trim().length > 100) {
			newErrors.name = "Name must be less than 100 characters";
		} else if (!/^[a-zA-Z\s.]+$/.test(name)) {
			newErrors.name =
				"Name can only contain letters, spaces, and periods";
		}

		// Email validation - Gmail only
		if (!email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@gmail\.com$/i.test(email)) {
			newErrors.email = "Gmail addresses (@gmail.com) are accepted";
		} else if (email.length > 255) {
			newErrors.email = "Email is too long";
		}

		// Message validation
		if (!message.trim()) {
			newErrors.message = "Message is required";
		} else if (message.trim().length < 10) {
			newErrors.message = "Message must be at least 10 characters";
		} else if (message.trim().length > 1000) {
			newErrors.message = "Message must be less than 1000 characters";
		}

		return newErrors;
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		setStatus("");
		setErrors({});
		setIsSubmitting(true);

		const formData = new FormData(event.target);

		const capitalizeWords = (str) =>
			str.replace(/\b\w/g, (char) => char.toUpperCase());

		const rawName = formData.get("name")?.trim() || "";
		const name = capitalizeWords(rawName);
		const email = formData.get("email")?.trim().toLowerCase() || "";
		const message = formData.get("message")?.trim() || "";

		// Frontend validation
		const validationErrors = validateForm(name, email, message);

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			setIsSubmitting(false);
			return;
		}

		let web3Success = false;
		let mongoSuccess = false;

		try {
			// Web3Forms submission
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
					},
				);

				const web3Result = await web3Res.json();
				web3Success = web3Result.success;

				if (!web3Success) {
					console.error("Web3Forms error:", web3Result);
				} else {
					console.log("✅ Web3Forms success");
				}
			} catch (err) {
				console.error("❌ Web3Forms request failed:", err);
			}

			// MongoDB submission
			try {
				console.log("📤 Sending to MongoDB:", { name, email, message });

				const mongoRes = await fetch("/api/feedback", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ name, email, message }),
				});

				console.log("MongoDB Response Status:", mongoRes.status);

				const mongoResult = await mongoRes.json();
				console.log("MongoDB Result:", mongoResult);

				if (mongoRes.ok && mongoResult.success) {
					mongoSuccess = true;
					// console.log("✅ MongoDB success, ID:", mongoResult.id);
				} else {
					mongoSuccess = false;

					// Handle backend validation errors
					if (mongoResult.errors) {
						setErrors(mongoResult.errors);
						setStatus("Please fix the errors below");
					} else if (mongoResult.error) {
						setStatus(mongoResult.error);
					} else {
						console.error("❌ MongoDB save failed:", mongoResult);
					}
				}
			} catch (err) {
				mongoSuccess = false;
				console.error("❌ MongoDB request failed:", err);
			}

			// Set appropriate status messages
			if (web3Success && mongoSuccess) {
				setStatus("Thank you for sharing your thoughts!");
				setErrors({});
				event.target.reset();
			} else if (web3Success && !mongoSuccess) {
				if (!Object.keys(errors).length && !status) {
					setStatus(
						"Email sent, but database save failed. We still received your message.",
					);
					event.target.reset();
				}
			} else if (!web3Success && mongoSuccess) {
				setStatus(
					"Message saved, but email notification failed. We still received your message.",
				);
				setErrors({});
				event.target.reset();
			} else {
				if (!Object.keys(errors).length && !status) {
					setStatus(
						"Failed to process your message. Please try again later.",
					);
				}
			}
		} catch (err) {
			console.error("❌ Unexpected submit error:", err);
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
				className="lg:w-1/2 w-full bg-neutral-900 p-8 rounded-2xl shadow-lg flex flex-col gap-4"
				noValidate>
				<h2 className="text-2xl font-bold text-center mb-3">
					Send Feedback
				</h2>

				<div className="flex flex-col gap-2">
					{/* Name Input */}
					<div>
						<input
							name="name"
							placeholder="Your Name"
							required
							autoComplete="name"
							className={`w-full p-3 rounded-lg bg-neutral-700 focus:outline-none border-2 transition-all duration-300 ease-in-out ${
								errors.name
									? "border-red-500 focus:border-red-500"
									: "border-transparent focus:border-purple-500 focus:shadow-[0_0_15px_rgba(217,70,239,0.5)]"
							}`}
						/>
						{errors.name && (
							<p className="text-red-400 text-sm mt-1 ml-1">
								{errors.name}
							</p>
						)}
					</div>

					{/* Email Input - Gmail Only */}
					<div>
						<input
							name="email"
							type="email"
							placeholder="example@gmail.com"
							required
							autoComplete="email"
							className={`w-full p-3 rounded-lg bg-neutral-700 focus:outline-none border-2 transition-all duration-300 ease-in-out ${
								errors.email
									? "border-red-500 focus:border-red-500"
									: "border-transparent focus:border-purple-500 focus:shadow-[0_0_15px_rgba(217,70,239,0.5)]"
							}`}
						/>
						{errors.email && (
							<p className="text-red-400 text-sm mt-1 ml-1">
								{errors.email}
							</p>
						)}
					</div>

					{/* Message Textarea */}
					<div>
						<textarea
							name="message"
							placeholder="Message (minimum 10 characters)"
							required
							rows="5"
							className={`w-full p-3 rounded-lg bg-neutral-700 focus:outline-none border-2 transition-all duration-300 ease-in-out resize-none ${
								errors.message
									? "border-red-500 focus:border-red-500"
									: "border-transparent focus:border-purple-500 focus:shadow-[0_0_15px_rgba(217,70,239,0.5)]"
							}`}
						/>
						{errors.message && (
							<p className="text-red-400 text-sm mt-1 ml-1">
								{errors.message}
							</p>
						)}
					</div>
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className="bg-purple-800 py-2 mt-5 rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out">
					{isSubmitting ? "Submitting..." : "Submit"}
				</button>

				{status && (
					<p
						className={`text-center mt-2 ${
							status.includes("Thank you") ||
							status.includes("received")
								? "text-green-400"
								: "text-red-400"
						}`}>
						{status}
					</p>
				)}
			</motion.form>
		</div>
	);
};

export default Feedback;
