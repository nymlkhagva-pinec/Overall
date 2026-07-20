/* ================= EASY ================= */
 
// E1. 1-10 хүртэл хэвлэ.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
 
 
// E2. 1-100 хүртэл хэвлэ.
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
 
// E3. 10-аас 1 хүртэл бууруулж хэвлэ.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
 
 
// E4. 1-20 хүртэл зөвхөн тэгш тоонуудыг хэвлэ.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
 
/* ================= MEDIUM ================= */
 
// M1. 1-ээс prompt-р орж ирсэн тоо хүртэлх нийлбэрийг ол.
const n = Number(prompt("Enter number"));
// Example: 5
// Expected: 15
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum =sum + i;
}
console.log(n +sum);
 
 
// M2. 1-ээс n хүртэл зөвхөн сондгой тоонуудыг хэвлэ.
 
 
// M3. 1-ээс n хүртэл 3-т хуваагддаг тоонуудыг хэвлэ.
 
 
// M4. 1-ээс n хүртэл бүх тооны квадрат хэвлэ.
// Example:
// 1 squared is 1
// 2 squared is 4
// 3 squared is 9
 
/* ================= HARD ================= */
 
// H1. Factorial ол.
// Example: 5! = 1 * 2 * 3 * 4 * 5 = 120
const num = Number(prompt("Enter number"));
 
 
// H2. 1-ээс n хүртэлх тоонууд дундаас
// тэгш тооны нийлбэр, сондгой тооны нийлбэрийг тусад нь ол.
// Example: n = 5
// Even sum: 6
// Odd sum: 9
 
 
// H3. Prime number эсэхийг шалга.
// Prime гэдэг нь зөвхөн 1 болон өөртөө хуваагддаг тоо.
// Example: 7 => Prime
// Example: 9 => Not prime
const primeNumber = Number(prompt("Enter number"));
 
 
// H4. 1-ээс 100 хүртэл:
// 3-т хуваагдвал "Fizz"
// 5-д хуваагдвал "Buzz"
// 3 ба 5-д зэрэг хуваагдвал "FizzBuzz"
// бусад үед өөрийнх нь тоог хэвлэ.