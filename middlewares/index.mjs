import Redis from 'ioredis';

const redis = new Redis();

export const redisCacheMiddleware = async (req, res, next) => {

    try {

        const cachedData = await redis.get(`${req?.url}`);

        if (!cachedData) {
            next()
        }

        return res.send({
            message: "data fetched",
            data: JSON.parse(cachedData)
        })

    } catch (error) {
        console.error(error)
        return res.status(500).send({
            message: "internal server error",
            error: error?.message
        })
    }

}