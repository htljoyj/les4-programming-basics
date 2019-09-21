"use strict";
exports.__esModule = true;
var grade = 7;
if (grade < 6) {
    console.log("onvoldoende");
}
else if (grade >= 6 && grade < 7) {
    console.log("voldoende");
}
else if (grade >= 7 && grade < 9) {
    console.log("goed");
}
else if (grade >= 9) {
    console.log("uitmuntend");
}
switch (true) {
    case (grade < 6):
        console.log("onvoldoende");
        break;
    case (grade >= 6 && grade < 7):
        console.log("voldoende");
        break;
    case (grade >= 7 && grade < 9):
        console.log("goed");
        break;
    case (grade >= 9):
        console.log("uitmuntend");
        break;
}
var purchasedBook = true;
var inTrain = false;
var job = "teacher";
if (purchasedBook && inTrain && job == "teacher") {
    console.log("Finally i can enjoy my book!");
}
else if (!purchasedBook && inTrain && job == "teacher") {
    console.log("I forgot to purchase a book.");
}
else if (purchasedBook && !inTrain && job == "teacher") {
    console.log("I'm waiting on my train.");
}
else if (purchasedBook && inTrain && job != "teacher") {
    console.log("I'm not a teacher yet.");
}
else if (!purchasedBook && !inTrain && job == "teacher") {
    console.log("I'll purchase a book on my way to the train.");
}
else if (!purchasedBook && inTrain && job != "teacher") {
    console.log("I'll purchase a book when I become a teacher.");
}
else if (!purchasedBook && !inTrain && job != "teacher") {
    console.log("I'll read a book in the train when I become a teacher");
}
