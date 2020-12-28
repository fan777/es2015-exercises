# Object Enhancements Exercise

## Same keys and values

        const createInstructor = (firstName, lastName) => ({
                firstName,
                lastName
        });

## Computed Property Names ES2015

        let favoriteNumber = 42;
        const instructor = {
            firstName: "Colt",
            [favoriteNumber]: "That is my favorite",
        }

## Object Methods ES2015

        const instructor = {
            firstName: "Colt",
            sayHi() {
                return "Hi!";
            },
            sayBye() {
                return this.firstName + " says bye!";
            }
        }

## createAnimal function

        const createAnimal = (species, verb, noise) => ({
            species,
            [`${verb}`]() {
                return noise;
            }
        });