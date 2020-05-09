import { ExampleController } from './example'

const makeSut = (): ExampleController => {
  return new ExampleController()
}

describe('ExampleController', () => {
  test('Ensure handle returns statusCode 200', async () => {
    const sut = makeSut()

    const httpResponse = await sut.handle({})
    expect(httpResponse.statusCode).toBe(200)
  })

  test('Ensure handle returns {foo: bar}', async () => {
    const sut = makeSut()

    const httpResponse = await sut.handle({})
    expect(httpResponse.body).toEqual({
      foo: 'bar'
    })
  })
})
