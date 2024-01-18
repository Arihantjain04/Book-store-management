import express from 'express'

import { MyBook as Book } from '../models/books.models.js'

import { createBook } from '../controllers/createBook.controllers.js'
import { getAllBooks } from '../controllers/getAllBooks.controllers.js'
import { getOneBook } from '../controllers/getOneBook.controllers.js'
import { updateOneBook } from '../controllers/updateOneBook.controllers.js'
import { deleteOneBook } from '../controllers/deleteOneBook.controllers.js'

const router = express.Router()

router.route('/').post(createBook)
router.route('/').get(getAllBooks)
router.route('/:id').get(getOneBook)
router.route('/:id').put(updateOneBook)
router.route('/:id').delete(deleteOneBook)

export default router