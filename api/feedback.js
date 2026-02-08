import { MongoClient } from "mongodb";
import { body, validationResult } from "express-validator";

let cachedClient = null;

async function connectDB() {
    if (cachedClient) return cachedClient;

    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    cachedClient = client;
    return client;
}

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

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, error: "Method not allowed" });
    }

    // Run validation
    await Promise.all(feedbackValidationRules.map(validation => validation.run(req)));

    // Check validation results
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

        const client = await connectDB();
        const db = client.db("FeedbackDB");
        const col = db.collection("FeedbackCollection");

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
        });

        console.log("✅ Document inserted with ID:", result.insertedId);

        res.status(200).json({
            success: true,
            message: "Feedback saved successfully"
        });

    } catch (err) {
        console.error("❌ Server error:", err);
        res.status(500).json({ success: false, error: "Server error" });
    }
}