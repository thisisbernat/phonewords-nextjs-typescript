import type { NextApiRequest, NextApiResponse } from 'next'
import { t9 } from '../../../services/t9.services'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { digits } = req.query
  const wordsArray = t9(String(digits))
  res.status(200).json(wordsArray)
}