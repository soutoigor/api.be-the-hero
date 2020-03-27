const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router()

routes.post('/sessions', SessionController.create)
routes.delete('/sessions', SessionController.delete)

routes.post('/ongs', OngController.create)
routes.get('/ongs', OngController.index)

routes.get('/profile/:id', ProfileController.index)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.get('/incidents/:id', ProfileController.index)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes
