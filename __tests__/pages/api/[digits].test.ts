import { createMocks, RequestMethod, createRequest, createResponse } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
import t9 from '../../../pages/api/t9/[digits]'

function mockRequestResponse(method: RequestMethod = 'GET') {
  const { req, res }: { req: NextApiRequest & ReturnType<typeof createRequest>; res: NextApiResponse & ReturnType<typeof createResponse> } = createMocks({ method })
  req.headers = {
    'Content-Type': 'application/json'
  }
  req.query = { digits: '' }
  return { req, res }
}

describe('/api/t9/[digits] API Endpoint', () => {
  it('should return a successful response', () => {
    const { req, res } = mockRequestResponse()
    t9(req, res)

    expect(res.statusCode).toBe(200)
    expect(res.getHeaders()).toEqual({ 'content-type': 'application/json' })
    expect(res.statusMessage).toEqual('OK')
  })

  it('should return a 400 if Digits are missing', () => {
    const { req, res } = mockRequestResponse()
    req.query = {}

    t9(req, res)

    expect(res.statusCode).toBe(400)
    expect(res._getJSONData()).toEqual({ err: 'Invalid digits parameter' })
  })

  it('should return a 405 if HTTP method is not GET', () => {
    const { req, res } = mockRequestResponse('POST')

    t9(req, res)

    expect(res.statusCode).toBe(405)
    expect(res._getJSONData()).toEqual({
      err: 'Method not allowed',
    })
  })

  it('should return the word "giraffe"', () => {
    const { req, res } = mockRequestResponse()
    req.query = { digits: '4472333' }

    t9(req, res)

    expect(res.statusCode).toBe(200)
    expect(res._getJSONData()).toEqual(['giraffe'])
  })
})