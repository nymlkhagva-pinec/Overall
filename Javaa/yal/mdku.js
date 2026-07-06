// const studentScores = [45, 80, 67, 30, 95, 55, 72];

// let passed = 0 
// let failed = 0
// let total = 0

// for (let i = 0; i < studentScores.length; i++) {
//     if (studentScores[i] >= 60) {
//         passed++;
//     } else {
//         failed++;
//     }
//     total = total + studentScores[i]
// }
// console.log ("passed:" + passed)
// console.log("failed:" + failed)
// console.log("total:" + total)







// E1. Print all numbers.
//
// Print every number.
//
// Expected:
// 5
// 10
// 15
// 20
// 25
 
const numbers1 = [5, 10, 15, 20, 25];

for (let i = 0; i < numbers1.length; i ++) {
    console.log (numbers1[i])
}
 
 
 
// E2. Print all names.
//
// Print every name.
//
// Expected:
// Bat
// Sara
// John
// Anu
 
const names2 = ["Bat", "Sara", "John", "Anu"];
 
for (let i = 0; i < names2.length; i ++) {
    console.log (names2[i])
}
 
 
 
// E3. Print the first value.
//
// Print the first color.
//
// Expected: red
 
const colors3 = ["red", "blue", "green", "yellow"];
 
console.log (colors3[0])
 
 
 
// E4. Print the last value.
//
// Print the last fruit.
//
// Do NOT write fruits4[3]
// Use .length.
//
// Expected: grape
 
const fruits4 = ["apple", "banana", "orange", "grape"];
 
console.log (fruits4[fruits4.length-1])
 
 
 
// E5. Print numbers greater than 10.
//
// Print only numbers greater than 10.
//
// Expected:
// 12
// 20
 
const numbers5 = [5, 12, 8, 20, 3];
 
for (let i = 0; i < numbers5.length; i++) {
    if( numbers5[i] > 10)
        console.log(numbers5[i])
}
 
 
// M1. Print even numbers.
//
// Print only even numbers.
//
// Expected:
// 12
// 8
// 20
 
const numbers6 = [5, 12, 8, 3, 20, 7];
 
for (let i = 0; i < numbers6.length; i ++) {
    if (numbers6[i] % 2 === 0)
        console.log(numbers6[i])
}
 
 
 
// M2. Print passed scores.
//
// A student passes if the score is 60 or higher.
//
// Print only passed scores.
//
// Expected:
// 80
// 67
// 95
 
const scores7 = [45, 80, 67, 30, 95, 55];
 
for (let i = 0; i < scores7.length; i++) {
    if (scores7[i] >= 60)
        console.log (scores7[i])
}
 
 
 
// M3. Count passed students.
//
// Count how many students passed.
//
// Passing score: 60 or higher.
//
// Expected: 3
 
const scores8 = [45, 80, 67, 30, 95, 55];
 
let passed8 = 0;
 
for ( let i = 0; i < scores8.length; i++) {
    if (scores8[i] >= 60) {
        passed8++;
    }
}
console.log("passed:" + passed8)
 
 
// M4. Find the total.
//
// Find the total of all numbers.
//
// Expected: 50
 
const numbers9 = [5, 10, 15, 20];
 
let total9 = 0;
 
for (i = 0; i < numbers9.length; i++) {
    total9 = total9 + numbers9[i]
}
console.log(total9)
 
 
// M5. Count even numbers.
//
// Count how many even numbers are in the Array.
//
// Expected: 3
 
const numbers10 = [5, 12, 8, 3, 20, 7];
 
let evenCount10 = 0;
 
for (i = 0; i < numbers10.length; i++) {
    if (numbers10[i] % 2 === 0) {
        evenCount10++;
    }
}
console.log("even " + evenCount10)
 
// H1. Find the biggest number.
//
// Find the biggest number.
//
// Expected: 30
 
const numbers11 = [5, 12, 8, 30, 20];
 
let biggest11 = numbers11[0];
let bigger1 = numbers11[0];
let bigger2 = numbers11[0];
let bigger3 = numbers11[0];
let bigger4 = numbers11[0];
 
for (i = 0; i < numbers11.length; i++) {
    if (numbers11[0] > numbers11[1]) {
        bigger1 = numbers11[0]
    } else { bigger1 = numbers11[1]}
    if (bigger1 > numbers11[2]) {
        bigger2 = bigger1
    } else { bigger2 = numbers11[2]}
    if (bigger2 > numbers11[3]) {
        bigger3 = bigger2
    } else { bigger3 = numbers11[3]}
    if (bigger3 > numbers11[4]) {
        bigger4 = bigger3
    } else { bigger4 = numbers11[4]}
    biggest11 = bigger4
}
console.log("The biggest number is " + biggest11)
 
 
// H2. Find the smallest number.
//
// Find the smallest number.
//
// Expected: 8
 
const numbers12 = [15, 12, 8, 30, 20];
 
let smallest12 = numbers12[0];

let smaller1 = numbers11[0];
let smaller2 = numbers11[0];
let smaller3 = numbers11[0];
let smaller4 = numbers11[0];
 
for (i = 0; i < numbers12.length; i++) {
    if (numbers11[0] < numbers12[1]) {
        smaller1 = numbers12[0]
    } else { smaller1 = numbers11[1]}
    if (smaller1 < numbers12[2]) {
        smaller2 = smaller1
    } else { smaller2 = numbers12[2]}
    if (smaller2 < numbers12[3]) {
        smaller3 = smaller2
    } else { smaller3 = numbers12[3]}
    if (smaller3 < numbers12[4]) {
        smaller4 = smaller3
    } else { smaller4 = numbers12[4]}
    smallest12 = smaller4
}
console.log("The smallest number is " + smallest12)
 
 
 
// H3. Count PASS and FAIL.
//
// Passing score: 60 or higher.
//
// Count passed students.
// Count failed students.
//
// Expected:
// Passed: 4
// Failed: 3
 
const scores13 = [45, 80, 67, 30, 95, 55, 72];
 
let passed13 = 0;
let failed13 = 0;
 
for (i = 0; i < scores13.length; i++) {
    if (scores13[i] >= 60) {
        passed13++;
    } else { failed13++;}
}
console.log("passed " + passed13)
console.log("failed " + failed13)
 
 
 
// H4. Find the total of even numbers.
//
// Add ONLY even numbers.
//
// Expected: 40
 
const numbers14 = [5, 12, 8, 3, 20, 7];
 
let total14 = 0;
 
for (i = 0; i < numbers14.length; i++) {
    if (numbers14[i] % 2 ===0) {
        total14 = total14 + numbers14[i]
    }
}
console.log(total14)
 
 
// H5. Student score report.
//
// Find:
//
// 1. Passed students count
// 2. Failed students count
// 3. Total score
//
// Passing score: 60 or higher.
//
// Expected:
// Passed: 4
// Failed: 3
// Total: 444
 
const studentScores15 = [45, 80, 67, 30, 95, 55, 72];
 
let passed15 = 0;
let failed15 = 0;
let total15 = 0;
 
for (let i = 0; i < studentScores15.length; i++) {
    if (studentScores15[i] >= 60) {
        passed15++;
    } else {
        failed15++;
    }
    total15 = total15 + studentScores15[i]
}
console.log ("passed:" + passed15)
console.log("failed:" + failed15)
console.log("total:" + total15)