# Rest / Spread Operator Exercises

In this exercise, you’ll refactor some ES5 code into ES2015.

## Given this function:

        function filterOutOdds() {
            var nums = Array.prototype.slice.call(arguments);
            return nums.filter(function(num) {
                return num % 2 === 0
            });
        }
## Refactor it to use the rest operator & an arrow function:

        const filterOutOdds = (...nums) => nums.filter( num => num %2 === 0);

## findMin

        const findMin = (...args) => args.reduce((min, curr) => Math.min(min, curr));

## mergeObjects

        const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

## doubleAndReturnArgs

        const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(arg => arg * 2)];

## Slice and Dice

removeRandom()

        const removeRandom = (items) => {
        const newArr = [...items];
            newArr.splice(Math.floor(Math.random() * Math.floor(items.length)), 1);
            return newArr;
        }

extend()

        const extend = (arr1, arr2) => [...arr1, ...arr2];

addKeyVal()

        const addKeyVal = (obj, key, val) => ({...obj, [key]: val})

removeKey()

        const removeKey = (obj, key) => {
            let newObj = {...obj};
            delete newObj[key];
            return newObj;
        }

combine()

        const combine = (obj1, obj2) => ({...obj1, ...obj2});

update()

        const update = (obj, key, val) => ({...obj, [key]: val});
