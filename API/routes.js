import express from 'express'
import { getMensaje } from './controllers.js'
export const router = express.Router()

router.get('/api/testEndpoint', (req, res) => {
  res.send(getMensaje())
})
