const raceResults = (arr) => {
    const [first, second, third, ...rest] = arr;
    return {
        first,
        second,
        third,
        rest,
    }
}

// OFFICIAL ANSWER
// const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest}) 

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/


