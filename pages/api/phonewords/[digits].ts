import type { NextApiRequest, NextApiResponse } from 'next'
import { phonewords } from '../../../services/phonewords'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { digits } = req.query
  const wordsArray = phonewords(String(digits))
  res.status(200).json(wordsArray)
}
