import dns from "dns"
dns.setServers(["8.8.8.8"])
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDatabase from "./config/mongoDB.js";
import productRoutes from "./routes/product.js";

dotenv.config();

const app = express();

connectDatabase();

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});