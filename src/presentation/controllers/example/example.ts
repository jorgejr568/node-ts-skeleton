import { Controller, HttpRequest, HttpResponse } from './example-protocols'
import { okResponse } from '../../helpers'

export class ExampleController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    return new Promise(resolve => {
      resolve(okResponse({
        foo: 'bar'
      }))
    })
  }
}
