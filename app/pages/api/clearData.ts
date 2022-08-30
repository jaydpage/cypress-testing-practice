import type { NextApiRequest, NextApiResponse } from 'next'

import redis from '../../lib/redis'

export default async function clearData(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await redis.flushall()
    res.status(200).json({
        body: 'success',
    })
}
