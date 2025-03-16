import express from "express"
import connectOnDbConnect from "./config/dbConnect.js"
import book from "./models/Book.js";

const connection = await connectOnDbConnect()
connection.on("error", (err) => {
    console.error("connection error:", err)
})

connection.once("open",  () => {
    console.log("connection opened")
})

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Welcome to Aurora!')
})

app.get('/books', async (req, res) => {
    const booksList = await book.find({})
    res.status(200).json(booksList)
})

app.get('/books/:id', (req, res) => {
    let book = books.find((book) => book.id === Number(req.params.id))
    res.status(202).json(book)
})

app.put('/books/:id', (req, res) => {
    let book = books.find((book) => book.id === Number(req.params.id))
    book.title = req.body.title

    res.status(202).json(book)
})

app.delete('/books/:id', (req, res) => {
    let book = books.find((book) => book.id === Number(req.params.id))
    books.splice(books.indexOf(book), 1)

    res.status(202).send('Deleted book with success')
})

app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).send('Added book with success')
})

export default app