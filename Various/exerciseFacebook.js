// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
user = {
    username: "user1",
    password: "pass1"
}

// 2. Create an array which contains the object you have made above and name the array "database".

var database = [
    user1 = {
        username: "george",
        password: "pass1",
        newsFeed: [
            {
                username: "Sara",
                timeline: "I'm at the beach"
            },
            {
                username: "Bob",
                timeline: "Check this out"
            },
            {
                username: "Jane",
                timeline: "Crafting is my favorite"
            }
        ]
    },
    user2 = {
        username: "penelope",
        password: "123",
        newsFeed: [
            {
                username: "Joe",
                timeline: "I'm at the BBQ!"
            },
            {
                username: "Boban",
                timeline: "New new!"
            },
            {
                username: "Jane",
                timeline: "Crafting is my favorite"
            }
        ]
    },
    user3 = {
        username: "mama",
        password: "password",
        newsFeed: [
            {
                username: "Sara",
                timeline: "I'm at the beach"
            },
            {
                username: "Gina",
                timeline: "My new song!"
            },
            {
                username: "ProductAdvert",
                timeline: "The best in the market!"
            }
        ]
    }
]
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsFeed =[
    {
        username: "Sara",
        timeline: "I'm at the beach"
    },
    {
        username: "Bob",
        timeline: "Check this out"
    },
    {
        username: "Jane",
        timeline: "Crafting is my favorite"
    }
];



var loggedIn = false;
var databaseIndex;
// do while not loggedIn
do{
    //prompt for userName
    console.log("Getting username...");
    userNamePrompt = prompt("Username: ");
    
    //search for username
    for (i = 0; loggedIn === false; i++)
    {
        console.log("Searching username...");
        if (userNamePrompt === database[i].username)
        {
            databaseIndex = i;
            let passwordFound = false;
            let passTryCount = 0;
            // prompt for password if user name is found
            //if password does not match
            //prompt for password again
            do
            {
                var passwordPrompt = prompt("Password: ");

                if(passwordPrompt !== database[i].password)
                {
                    console.log("Sorry wrong password.");
                }
                else if (passwordPrompt === database[i].password)
                {
                    passwordFound = true;
                    loggedIn = true;
                }
                else
                {
                    console.log("Error!");
                    break;
                }
            }
            while(!passwordFound);
            
        }
    }
    
        
    //else if username does not exist
    //notify that username does not exist
}
while(loggedIn === false);
    //while not loggedIn 
if(loggedIn === true)
{
    console.log(database[databaseIndex].newsFeed);
}