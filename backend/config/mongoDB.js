import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected");
    } catch (error) {
        console.log("Database Connection Failed");
        console.log(error.message);

        process.exit(1);
    }
};

export default connectDatabase;