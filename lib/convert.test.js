const convert = require('./convert')
test('convert 4 to 4', () => {
  expect(convert.convert(2, 4)).toBe(8)
})
test ('toMoney converts float', () => {
  expect(convert.toMoney(2)).toBe('2.00')
})