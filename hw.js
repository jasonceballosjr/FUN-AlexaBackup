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

/*Henry Video
I found the protocol analogy where he used languages like English and spanish
to explain that both ends needs to understand the requirements in order
to communicate well.
I also enjoyed how he explained back-end by using restaurants when your order
had been placed and sent to the kitchen. What you get in return will be the
pretty and tasty food (functioning website) after your request went through.
*/