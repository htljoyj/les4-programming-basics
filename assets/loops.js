"use strict";
exports.__esModule = true;
var number1 = 1;
while (number1 < 11) {
    console.log(number1);
    number1++;
}
var str = "Het is maandag!";
for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}
for (var i = 1; i <= 25; i++) {
    if ((i % 3) == 0)
        console.log(i + " is wel deelbaar door 3.");
    else
        console.log(i + " is niet deelbaar door 3.");
}
// let str2: string = "Geweldig";
// let str3: string = "";
// let j: number = 0;
// // while (j <= str2.length) {
//     str3 += str2.charAt(str2.length - j);
//     j++;
// }
// console.log(str3);
// let str4: string = "legovogel";
// let str5: string = "";
// let k: number = 0;
// while (k <= str4.length) {
//     str5 += str4.charAt(str4.length - k);
//     k++;
// }
// if(str4 == str5)
//     console.log("het is een palindrome.");
// else
//     console.log("het is geen palindrome.");
