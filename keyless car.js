var age = prompt("Please enter your age: ");
age = Number(age);

if (age < 18)
{
    alert("Sorry, you are too young to drive this car. Powering off");
}

else if(age === 18){
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}

else{
    alert("Powering On.  Enjoy the ride!");
}
