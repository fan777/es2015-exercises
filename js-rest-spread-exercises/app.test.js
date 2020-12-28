describe('findMin' , () => {
    it('should find min', () => {
        expect(findMin(1,4,12,-3)).toEqual(-3);
        expect(findMin(1,-1)).toEqual(-1);
        expect(findMin(3,1)).toEqual(1);
    });
});

describe('mergeObjects', () => {
    it('should merge objects', () => {
        expect(mergeObjects({a:1, b:2}, {c:3, d:4})).toEqual({a:1, b:2, c:3, d:4});
    })
})

describe('doubleAndReturnArgs', () => {
    it('should create new array with input array and doubled varied args', () => {
        expect(doubleAndReturnArgs([1,2,3],4,4)).toEqual([1,2,3,8,8]);
        expect(doubleAndReturnArgs([2],10,4)).toEqual([2, 20, 8]);
    })
})

describe('Slice and Dice', () => {
    it('should remove random element from array and return new array', () => {
        let testArr = [1, 2, 3, 4];
        let returnArr = removeRandom(testArr);
        expect(testArr.length).toEqual(4);
        expect(testArr).toEqual([1, 2, 3, 4]);
        expect(returnArr.length).toEqual(3);
    })
    it('should return new array with all items in array1 and arary2', () => {
        expect(extend([1,2], [3,4])).toEqual([1,2,3,4]);
    })
    it('should add key and val to object', () => {
        expect(addKeyVal({dino: 'trex'}, 'scary', 'yes')).toEqual({dino: 'trex', scary: 'yes'});
    })
    it('should remove key from object', () => {
        expect(removeKey({dino: 'trex', scary: 'yes'}, 'scary')).toEqual({dino: 'trex'});
    })
    it('should combine two objects into new object', () => {
        expect(combine({dino: 'trex', scary: 'yes'}, {arms: 'short', teeth: 'large'})).toEqual({dino: 'trex', scary: 'yes', arms: 'short', teeth: 'large'});
    })
    it('should combine two objects into new object', () => {
        expect(update({dino: 'trex', scary: 'yes'}, 'scary', 'no')).toEqual({dino: 'trex', scary: 'no'});
    })
})