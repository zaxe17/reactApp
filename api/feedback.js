import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = "FeedbackDB";
const collectionName = "Feedbacks";

let client;
let collection;

// Connect once (re-use in serverless functions)
async function connectToDB() {
    if (collection) return collection;

    client = new MongoClient(uri, {
        serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
    });
    await client.connect();
    const db = client.db(dbName);
    collection = db.collection(collectionName);
    return collection;
}

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { name, email, message } = req.body;

            if (!name || !email || !message) {
                return res.status(400).json({ success: false, error: "Missing required fields" });
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ success: false, error: "Invalid email format" });
            }

            const collection = await connectToDB();

            const result = await collection.insertOne({
                name,
                email,
                message,
                createdAt: new Date(),
            });

            return res.status(200).json({
                success: true,
                message: "Feedback saved successfully",
                id: result.insertedId.toString(),
            });
        } catch (err) {
            console.error("MongoDB Error:", err);
            return res.status(500).json({ success: false, error: "Database error", details: err.message });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ success: false, error: "Method not allowed" });
    }
}
