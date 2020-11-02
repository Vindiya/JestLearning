const twoSum = require('./twoSum');

test('checks if correct index returned', () => {
    var arr=[2,7,11,15]
    var res=[0,1]
    expect(twoSum(arr, 9)).toStrictEqual(res);
});