let canConstruct = require('./ransomNote')

let ransomNote = 'eggo'
let falseRansomNote = 'abc'
let magazine = 'google'

describe('canConstruct', () => {
  describe('parameters are strings', () => {
    it('Should return true', () => {
      let result = canConstruct(ransomNote, magazine)
      expect(result).toBeTruthy()
    })
    it('Should return false', () => {
      let result = canConstruct(falseRansomNote, magazine)
      expect(result).toBeFalsy()
    })
  })
})