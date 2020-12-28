/* Same keys and values ES2015 */

const createInstructor = (firstName, lastName) => ({
        firstName,
        lastName
});

/* Computed Property Names ES2015 */

let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite",
}

/* Object Methods ES2015 */

const instructor2 = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

/* createAnimal function */

// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

const createAnimal = (species, verb, noise) => ({
    species,
    [`${verb}`]() {
        return noise;
    }
});
