const functions = require('./functions');

test('Adds 2 numbers', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('Subtract 2 numbers', () => {
    expect(functions.subtract(2,2)).toBe(0);
});

test('Multiply 2 numbers', () => {
    expect(functions.multiply(2,3)).toBe(6);
});

test('Divide a number by another number', () => {
    expect(functions.divide(2,2)).toBe(1);
});