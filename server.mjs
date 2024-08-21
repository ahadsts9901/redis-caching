import express, { json } from "express"
import morgan from "morgan"
import Redis from "ioredis"

const app = express()
const redis = new Redis()

import redisRoutes from "./routes/index.mjs"

app.use(json())
app.use(morgan('dev'))

redis.on('connect', () => console.log('connected to redis'));

redis.on('error', (err) => console.error('redis error', err));

app.use('/api/v1', redisRoutes)

const PORT = process.env.PORT || 5002

app.listen(PORT, () => console.log(`server running on port ${PORT}`))