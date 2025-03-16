import express from "express"
import connectOnDbConnect from "./config/dbConnect.js"
import routes from "./routes/index.js"

const connection = await connectOnDbConnect()
connection.on("error", (err) => {
    console.error("connection error:", err)
})

connection.once("open",  () => {
    console.log("connection opened")
})

const app = express()
routes(app)

export default app