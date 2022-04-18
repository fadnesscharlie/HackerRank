
let lonelyinteger = require('./lonelyInteger.js')

  let result = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]
  let multipleResults = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 7, 8]

describe('LonelyInterger', () => {
  describe('Values in array are accurate', () => {
    // Integers
    it('Should return back all whole numbers', () => {
      result.map(el => {
        expect(typeof el).toBe('number')
      })
    })
  })

  describe('Return True', () => {
    // Accurately returns back correct number
    it('should return back the correct answer', () => {
      let answer = lonelyinteger(result)
      expect(answer[0]).toBe(6)
    })
  })

  describe('Returns false', () => {
    // Multiple single numbers
    it('should return false for numtiple numbers in array', () => {
      let answer = lonelyinteger(multipleResults)
      let nums = answer.length
      expect(nums).not.toBeLessThanOrEqual(1)
    })
  })
})