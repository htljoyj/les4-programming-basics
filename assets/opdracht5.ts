let i: number = 1;
while(i <= 25) {
    if((i%4) == 0)
        console.log(i + " is wel deelbaar door 4.");
    else
        console.log(i + " is niet deelbaar door 4.");
    
    i++;
}

let num1: number = 1;
let j: number = 0;

while (j <= 10) {
num1 += num1;
console.log(num1);
    j++;
}

let num2: number = 0;
let numArr: number[] = [2, 4, 8, 9, 12, 13];

for(let k: number = 0; k < numArr.length; k++) {
    num2 += numArr[k];
}

console.log(num2);

    