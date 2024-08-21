import Redis from "ioredis";

const redis = new Redis();

export const redisController = async (req, res, next) => {

    try {

        const data = {
            title: "new title",
            text: "new text"
        }

        console.log(req?.url)

        await redis.set(`${req?.url}`, JSON.stringify(data), 'EX', 3600); // Cache for 1 hour (time in seconds)

        return res.send({
            message: "redis controller data fetched",
            data: data
        })

    } catch (error) {
        console.error(error)
        return res.status(500).send({
            message: "internal server error",
            error: error?.message
        })
    }

}

export const normalController = async (req, res, next) => {

    try {

        const data = {
            title: "new title",
            text: "new text"
        }

        return res.send({
            message: "normal controller data fetched",
            data: data
        })

    } catch (error) {
        console.error(error)
        return res.status(500).send({
            message: "internal server error",
            error: error?.message
        })
    }

}