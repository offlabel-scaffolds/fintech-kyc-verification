import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'API running' })
})

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' })
})

app.listen(port, () => {
  console.log(`Server on port ${port}`)
})