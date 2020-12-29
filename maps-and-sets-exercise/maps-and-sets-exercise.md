# Maps and Sets Exercise

## Quick Question #1

Set {1, 2, 3, 4}

## Quick Question #2

ref

## Quick Questions #3

Map {
    0: {Array(3) => true}
    1: {Array(3) => false}
}

## hasDuplicate

        const hasDuplicate = (arr) => (new Set(arr)).size < arr.length ? true : false;

## vowelCount

        const vowelCount = (input) => {
            return [...(input.toLowerCase())].reduce( (accu, letter) => {
                if (new Set([...'aeiou']).has(letter)) {
                    if (accu.has(letter)) {
                        accu.set(letter, accu.get(letter) + 1);
                    } else {
                        accu.set(letter, 1);
                    }
                }
                return accu;
            }, new Map);
        }  