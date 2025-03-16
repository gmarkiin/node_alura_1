import express from 'express'
import all_routes from '../routes/routes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('i dont like that')
    })

    app.use(express.json(), all_routes)
}

export default routes;