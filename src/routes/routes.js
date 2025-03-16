import express from "express"
import BookController from "../controllers/bookController.js"
import AuthorController from "../controllers/authorController.js";

const routes = express.Router()

routes.get("/books", BookController.getBooks)
routes.post("/books", BookController.createBook)
routes.get("/books/:id", BookController.getBookById)
routes.put("/books/:id", BookController.updateBookById)
routes.delete("/books/:id", BookController.deleteBookById)

routes.get("/authors", AuthorController.getAuthors)
routes.post("/authors", AuthorController.createAuthor)
routes.get("/author/:id", AuthorController.getAuthorById)
routes.put("/author/:id", AuthorController.updateAuthorById)
routes.delete("/author/:id", AuthorController.deleteAuthorById)

export default routes