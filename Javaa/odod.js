/* ================= EASY ================= */
 
// E1. 5 ширхэг од нэг мөрөнд хэвлэ.
// Expected:
// *****
result = "";
for (let i = 1; i <= 5; i++) {
    result = result + "*";
}
console.log(result);
 
 
// E2. 5 мөр тус бүрт нэг од хэвлэ.
// Expected:
// *
// *
// *
// *
// *
result = "";
for (let i = 1; i <= 5; i++) {
    result = result + "*" + "\n"; 
    
}
console.log(result);
 
/* ================= MEDIUM ================= */
 
// M1. Дараах хэлбэрийг loop ашиглаж хэвлэ.
// *
// **
// ***
// ****
// *****

for (i = 1; i <= 5; i++) {
    result = ""
    for (j=1; j<=i; j++) {
    result = result + "*"
   }  
    console.log(result)
}
// M2. Урвуу гурвалжин хэвлэ.
// *****
// ****
// ***
// **
// *
for (i = 5; i >= 1; i--) {
    result = ""
    for (j=1; j<=i; j++) {
    result = result + "*"
   }  
    console.log(result)
}
 
/* ================= HARD ================= */
 
// H1. Дараах pyramid хэвлэ.
//     *
//    ***
//   *****
//  *******
// *********
for (i=1; i <= 9; i += 2) {
    result = ""
    for (j=1; j <= (9-i)/2; j++) {
        result = result + " "
    }
    for (k=1; k <= i; k++) {
        result = result + "*"
    }
    console.log(result)
}
 
 
// H2. Number triangle хэвлэ.
// 1
// 12
// 123
// 1234
// 12345
for (i=1; i <= 5; i++) {
    result = ""
    for (j=1; j <= i; j++) {
        result = result + j
    }
    console.log(result)
}

// H3. Multiplication table хэвлэ.
// Example:
// 1 x 1 = 1
// 1 x 2 = 2
// ...
// 9 x 9 = 81
for (i=1; i <= 9; i++) {
    for (j=1; j <= 9; j++) {
       console.log (i + " x " + j + " = " + (i*j)) 
    }
}