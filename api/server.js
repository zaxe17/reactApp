import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGODB_URI);

let collection;

async function connectDB() {
	if (!collection) {
		await client.connect();
		const db = client.db("FeedbackDB");
		collection = db.collection("FeedbackCollection");
		console.log("MongoDB Connected");
	}
	return collection;
}

app.post("/api/feedback", async (req, res) => {
	try {
		const { name, email, message } = req.body;

		if (!name || !email || !message) {
			return res.status(400).json({ success: false });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return res.status(400).json({
				success: false,
				error: "Invalid email",
			});
		}

		const col = await connectDB();

		const result = await col.insertOne({
			name,
			email,
			message,
			createdAt: new Date(),
		});

		res.json({
			success: true,
			id: result.insertedId,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false });
	}
});

app.listen(5000, () => {
	console.log("🚀 Backend running at http://localhost:5000");
});
