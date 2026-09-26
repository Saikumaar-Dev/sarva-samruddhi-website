import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "https://saikumaar-dev.github.io",
  "http://localhost:3000",
  "http://localhost:5173",
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json({ limit: "100kb" }));

const mongoClient = new MongoClient(process.env.MONGODB_URI);

let database;

async function connectDatabase() {
  await mongoClient.connect();

  database = mongoClient.db("sarva_samruddhi");

  console.log("MongoDB connected successfully");
}

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Sarva Samruddhi API is running",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    database: database ? "connected" : "not connected",
  });
});

app.post("/api/submissions", async (req, res) => {
  try {
    const {
      name,
      mobile,
      email,
      mandal,
      participationType,
      message,
      consent,
    } = req.body;

    // Basic validation
    if (!name || !mobile || !mandal || !participationType) {
      return res.status(400).json({
        success: false,
        message: "Name, mobile, mandal and participation type are required.",
      });
    }

    if (consent !== true) {
      return res.status(400).json({
        success: false,
        message: "Consent is required before submitting the form.",
      });
    }

    const cleanName = String(name).trim();
    const cleanMobile = String(mobile).trim();
    const cleanMandal = String(mandal).trim();
    const cleanParticipationType = String(participationType).trim();

    if (cleanName.length < 2 || cleanName.length > 100) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid name.",
      });
    }

    if (!/^[0-9+\-\s()]{10,20}$/.test(cleanMobile)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid mobile number.",
      });
    }

    const submission = {
      name: cleanName,
      mobile: cleanMobile,
      email: email ? String(email).trim().toLowerCase() : "",
      mandal: cleanMandal,
      participationType: cleanParticipationType,
      message: message ? String(message).trim().slice(0, 2000) : "",
      consent: true,
      createdAt: new Date(),
      status: "new",
    };

    const result = await database
      .collection("submissions")
      .insertOne(submission);

    res.status(201).json({
      success: true,
      message: "Your submission has been received successfully.",
      referenceId: result.insertedId.toString(),
    });
  } catch (error) {
    console.error("Submission error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to process the submission right now.",
    });
  }
});

async function startServer() {
  try {
    await connectDatabase();

    app.listen(PORT, "0.0.0.0", () => {
  console.log(`API running on port ${PORT}`);
});
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
