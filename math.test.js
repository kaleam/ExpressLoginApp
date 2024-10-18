const { add, subtract } = require('./math')

test('add 1 and 2', () => {
    expect(add(1, 2)).toBe(3);
})
