import express from "express"

const app = express()
app.use(express.json())

const books = [
    {
        id: 1,
        title: 'Lord of Rings'
    },
    {
        id: 2,
        title: 'The Hobbit'
    }
]

app.get('/', (req, res) => {
    res.status(200).send('Welcome to Aurora!')
})

app.get('/books', (req, res) => {
    res.status(200).json(books)
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


app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).send('Added book with success')
})

export default app