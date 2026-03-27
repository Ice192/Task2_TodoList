import mongoose from "mongoose";

export const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        console.error("DB Connection error: MONGO_URI belum di-set di file .env");
        process.exit(1);
    }

    if (mongoUri.includes("<db_password>")) {
        console.error("DB Connection error: ganti placeholder <db_password> di MONGO_URI dengan password Atlas asli.");
        process.exit(1);
    }

    try {
        await mongoose.connect(mongoUri);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("DB Connection error: ", error);
        process.exit(1);
    }
};
