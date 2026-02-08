import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { body, validationResult } from "express-validator";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
	origin: "http://localhost:5173",
	credentials: true
}));
app.use(express.json());

// MongoDB Connection
const client = new MongoClient(process.env.MONGODB_URI);
let collection;

async function connectDB() {
	if (!collection) {
		try {
			await client.connect();
			const db = client.db("FeedbackDB");
			collection = db.collection("FeedbackCollection");
			console.log("✅ MongoDB Connected Successfully");
		} catch (error) {
			console.error("❌ MongoDB Connection Error:", error);
			throw error;
		}
	}
	return collection;
}

// Initialize DB connection on startup
connectDB();

// Validation Rules (Laravel-style!)
const feedbackValidationRules = [
	body('name')
		.trim()
		.notEmpty().withMessage('Name is required')
		.isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters')
		.matches(/^[a-zA-Z\s.]+$/).withMessage('Name can only contain letters, spaces, and periods'),

	body('email')
		.trim()
		.notEmpty().withMessage('Email is required')
		.isEmail().withMessage('Invalid email format')
		.matches(/@gmail\.com$/i).withMessage('Gmail addresses (@gmail.com) are accepted')
		.isLength({ max: 255 }).withMessage('Email is too long'),

	body('message')
		.trim()
		.notEmpty().withMessage('Message is required')
		.isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10 and 1000 characters')
];

// Feedback API endpoint
app.post("/api/feedback", feedbackValidationRules, async (req, res) => {
	console.log("📥 Received feedback request");
	console.log("Request body:", req.body);

	// Check validation results (like Laravel's $validator)
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		console.log("❌ Validation failed:", errors.array());

		// Format errors like Laravel
		const formattedErrors = {};
		errors.array().forEach(error => {
			formattedErrors[error.path] = error.msg;
		});

		return res.status(400).json({
			success: false,
			errors: formattedErrors,
			message: "Validation failed"
		});
	}

	try {
		const { name, email, message } = req.body;

		// Get collection
		const col = await connectDB();

		// Check for duplicate (prevent spam)
		const recentDuplicate = await col.findOne({
			email: email.toLowerCase(),
			createdAt: {
				$gte: new Date(Date.now() - 60000) // Within last 1 minute
			}
		});

		if (recentDuplicate) {
			console.log("⚠️ Duplicate submission detected");
			return res.status(429).json({
				success: false,
				error: "Please wait before submitting again"
			});
		}

		// Insert into database
		const result = await col.insertOne({
			name: name.trim(),
			email: email.toLowerCase().trim(),
			message: message.trim(),
			createdAt: new Date(),
			ip: req.ip || req.connection.remoteAddress,
		});

		console.log("✅ Document inserted with ID:", result.insertedId);

		res.status(201).json({
			success: true,
			// id: result.insertedId.toString(),
			message: "Feedback saved successfully"
		});

	} catch (error) {
		console.error("❌ Server error:", error);
		res.status(500).json({
			success: false,
			error: "Internal server error"
		});
	}
});

// Health check endpoint
app.get("/api/health", (req, res) => {
	res.json({ status: "OK", message: "Server is running" });
});

// Get all feedback (for admin dashboard)
app.get("/api/feedback/list", async (req, res) => {
	try {
		const col = await connectDB();

		const feedbacks = await col
			.find({})
			.sort({ createdAt: -1 })
			.limit(100)
			.toArray();

		res.json({
			success: true,
			feedbacks: feedbacks,
			total: feedbacks.length
		});

	} catch (error) {
		console.error("Error fetching feedback:", error);
		res.status(500).json({
			success: false,
			error: "Failed to fetch feedback"
		});
	}
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`🚀 Backend server running at http://localhost:${PORT}`);
});

// Graceful shutdown
process.on("SIGINT", async () => {
	console.log("\n⚠️ Shutting down gracefully...");
	await client.close();
	process.exit(0);
});