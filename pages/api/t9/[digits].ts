import type { NextApiRequest, NextApiResponse } from 'next'
import { t9 } from '../../../services/t9.services'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ err: 'Method not allowed' })
    return
  }

  if (typeof req.query.digits !== 'string') {
    res.status(400).json({ err: 'Invalid digits parameter' })
    return
  }

  const { digits } = req.query
  const wordsArray = t9(String(digits))
  res.status(200).json(wordsArray)
}