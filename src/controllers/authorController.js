import { author } from '../models/Author.js'

class AuthorController {

    static async getAuthors(req, res) {
        try {
            const authorsList = await author.find({})
            res.status(200).json(authorsList)
        } catch (err) {
            res.status(500).json({ message:` ${err.message} - failed to retrieve authors` })
        }
    }

    static async createAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body)
            res.status(201).json({
                message: 'Author created successfully.',
                author: newAuthor
            })
        } catch (err) {
            res.status(500).json({ message:` ${err.message} - failed to create new author` })
        }
    }

    static async getAuthorById(req, res) {
        try {
            const found_author = await author.findById(req.params.id)
            res.status(200).json(found_author)
        } catch (err) {
            res.status(500).json({ message:` ${err.message} - failed to retrieve author` })
        }
    }

    static async updateAuthorById(req, res) {
        try {
            await author.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).send('Author updated successfully.')
        } catch (err) {
            res.status(500).json({ message:` ${err.message} - failed to updated author` })
        }
    }

    static async deleteAuthorById(req, res) {
        try {
            await author.findByIdAndDelete(req.params.id, req.body)
            res.status(200).send('Author deleted successfully.')
        } catch (err) {
            res.status(500).json({ message:` ${err.message} - failed to delete author` })
        }
    }
}

export default AuthorController