import { HttpResponse } from '../protocols'
import { ServerError } from '../errors'

export const serverError = (): HttpResponse => {
  return {
    statusCode: 500,
    body: new ServerError()
  }
}
