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

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }  