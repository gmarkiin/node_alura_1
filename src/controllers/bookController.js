import book from '../models/Book.js'
import { author } from '../models/Author.js'

class BookController {

    static async getBooks(req, res) {
        try {
            const booksList = await book.find({})
            res.status(200).json(booksList)
        } catch (err) {
            res.status(500).json({ message:` ${err.message} - failed to retrieve books` })
        }
    }

    static async createBook(req, res) {
        const request = req.body
        try {
            const founded_author = await author.findById(request.author)
            const build_book = { ...request, author: { ...founded_author._doc}}

            const newBook = await book.create(build_book)
            res.status(201).json({
                message: 'Book created successfully.',
                book: newBook
            })
        } catch (err) {
            res.status(500).json({ message:` ${err.message} - failed to create new book` })
        }
    }

    static async getBookById(req, res) {
        try {
            const found_book = await book.findById(req.params.id)
            res.status(200).json(found_book)
        } catch (err) {
            res.status(500).json({ message:` ${err.message} - failed to retrieve book` })
        }
    }

    static async updateBookById(req, res) {
        try {
            await book.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).send('Book updated successfully.')
        } catch (err) {
            res.status(500).json({ message:` ${err.message} - failed to updated book` })
        }
    }

    static async deleteBookById(req, res) {
        try {
            await book.findByIdAndDelete(req.params.id, req.body)
            res.status(200).send('Book deleted successfully.')
        } catch (err) {
            res.status(500).json({ message:` ${err.message} - failed to delete book` })
        }
    }
}

export default BookController