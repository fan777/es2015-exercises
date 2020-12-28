
/* findMin */
const findMin = (...args) => Math.min(...args);


/* mergeObjects */
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

/* doubleAndReturnArgs */
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(arg => arg * 2)];

/* Slice and Dice */

/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = (items) => {
    let idx = Math.floor(Math.random() * items.length);
    const newArr = [...items];
    newArr.splice(idx, 1);
    return newArr;
    //return [...items.slice(0, idx), ...items.slice(idx + 1)]; // OFFICIAL ANSWER
}

/** Return a new array with every item in array1 and array2. */
const extend = (arr1, arr2) => [...arr1, ...arr2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => ({...obj1, ...obj2});

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => ({...obj, [key]: val});
