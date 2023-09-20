const { Router } = require('express')

const usersRouter = require('./users.routes')
const notesRouter = require('./notes.routes')
const tagsRouter = require('./tags.routes')
const carsRouter = require('./cars.routes')
const carsAdminRouter = require("./carsadmin.routes")
const sessionsRouter = require('./sessions.routes')
const addressRouter = require("./address.routes")


const routes = Router()

routes.use('/users', usersRouter)
routes.use('/notes', notesRouter)
routes.use('/tags', tagsRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/cars', carsRouter)
routes.use('/carsadmin', carsAdminRouter)
routes.use('/addr', addressRouter)


module.exports = routes