const chai = require('chai')
const expect = chai.expect
const faker = require('faker')
const MissingParameterError = require('src/errors/missing-parameter')
const localization = require('src/localization')

const randomParameter = faker.lorem.word()

describe('Missing parameter error', () => {
  beforeEach(function () {
    this.error = new MissingParameterError(randomParameter)
  })

  it('extends from Error', function () {
    expect(this.error).to.be.instanceof(Error)
  })

  it('sets error name from constructor', function () {
    expect(this.error.name).to.be.equal('MissingParameterError')
  })

  it('sets error message', function () {
    expect(this.error.message).to.be.equal(localization.errors.badRequest())
  })

  it('sets error description', function () {
    expect(this.error.description).to.be.equal(localization.errors.missingParameter({ parameter: randomParameter }))
  })
})
