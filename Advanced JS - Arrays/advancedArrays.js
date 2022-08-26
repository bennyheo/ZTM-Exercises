const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const exclaimNames = [];
const addExclaim = array.forEach((object) => {
exclaimNames.push(object.username + "!");
})

// Create an array using map that has all the usernames with a "? to each of the usernames

const addQuestion = array.map((object) => {
    return object.username + "?"
})

//Filter the array to only include users who are on team: red
const filterTeams = array.filter((object) => {
    if (object.team === "red")
    {
        return object.team;
    }
})

const reduceScores = array.reduce((acc, object) => {
   return acc + object.score;
}, 0)
console.log('reduce', reduceScores);


// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})
// i = 0

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.


const addExclaimToItems = array.map((object) => {
    object.items = object.items.map((item) => {
       return item + "!";
    })
    return object;
})
console.log(addExclaimToItems)