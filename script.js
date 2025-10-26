
let myGrade = 98; 

if (myGrade >= 90) {
    console.log ("You got an A");
} 
else if (myGrade <= 89 && myGrade >= 80) {
    console.log ("You got a B");
}
else if (myGrade <= 79 && myGrade >= 70) {
    console.log ("You got a C");
}
else if (myGrade <= 69 && myGrade >= 60) {
    console.log ("You got a D");
}
else if (myGrade <= 59) {
    console.log ("You got an F!");
}

// I believe the last one you're gonna do would be your else statement. I think because there is no in between from 59 everything 59 and below is an F.

let Grade = "B";

switch (Grade) {
    case ("A"):
        console.log ("You got an A -Switch Statement");
        break;
    case ("B"):
        console.log ("You got a B -Switch Statement");
        break;
    case ("C"):
        console.log ("You got a C -Switch Statement");
        break;
    case ("D"):
        console.log ("You got a D -Switch Statement");
        break;
    case ("F"):
        console.log ("You got an F -Switch Statement");

}
// The switch statement seems to be straight to the point and  cleaner? But the downside seems like you need to be very precise. I wasn't able to figure out a way to do a range of numbers I tried but that didn't seem to work so I resorted to just using the letter grades. 

//Once I was able to get the else if one it seemed okay to use. I can see where it can start to get confusing/messy. If you have a lot of statements it can get to be a lot of code.

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
    console.log("!");
}
else {
    console.log(i);
}
}