import type { NextApiRequest, NextApiResponse } from 'next'
import t9 from '../../pages/api/t9/[digits]'

test('API endpoint', () => {
  const req = {
    query: {
      digits: "447233"
    }
  }

  const json = jest.fn()
  const status = jest.fn(() => {
    return {
      json
    }
  })

  const res = {
    status
  }

  t9(req, res)
})