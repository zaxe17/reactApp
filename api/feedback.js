import { MongoClient } from "mongodb";

let cachedClient = null;

async function connectDB() {
	if (cachedClient) return cachedClient;

	const client = new MongoClient(process.env.MONGODB_URI);
	await client.connect();
	cachedClient = client;
	return client;
}

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ success: false });
	}

	try {
		const { name, email, message } = req.body;

		if (!name || !email || !message) {
			return res.status(400).json({ success: false });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return res.status(400).json({ success: false });
		}

		const client = await connectDB();
		const db = client.db("FeedbackDB");

		const result = await db.collection("FeedbackCollection").insertOne({
			name,
			email,
			message,
			createdAt: new Date(),
		});

		res.status(200).json({
			success: true,
			id: result.insertedId,
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ success: false });
	}
}
