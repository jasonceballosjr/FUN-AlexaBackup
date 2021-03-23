let user = prompt("What is your name?");
let prompt1 = prompt("Want a fortune?");
let decision = ["yes", "no"];
let fortune = [
    "You'll win the lottery!", "You'll find love soon.",
    "You're going places!", "You will see a blue bird."
];
let ranNum = Math.floor(Math.random() * fortune.length);

function myFunction() {

    if (prompt1 === decision[0]) {
        alert(fortune[ranNum]);
    } else {
        alert(user + "," + " you didn't deserve one anyways!");
    }
}


myFunction();