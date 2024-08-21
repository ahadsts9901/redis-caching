import { Router } from "express";
import { redisCacheMiddleware } from "../middlewares/index.mjs"
import { normalController, redisController } from "../controllers/index.mjs"

const router = Router()

router.get("/cached", redisCacheMiddleware, redisController)

router.get("/not-cached", normalController)

export default router