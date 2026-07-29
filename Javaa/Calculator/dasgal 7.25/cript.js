/*
==================================================
JAVASCRIPT PRACTICE
Objects, Destructuring, Spread,
Functions & Array Methods
 
RULES:
- Do not change the given data unless the task asks you to.
- Use console.log() to check your results.
- Complete EASY first.
- Then continue to MEDIUM and HARD.
*/

// E1. Object-оос мэдээлэл авах
// student object-оос сурагчийн нэр, нас, оноог хэвлэ.

const studentE1 = {
  name: "Anu",
  age: 15,
  score: 88,
};

// Expected:
// Anu
// 15
// 88

// your code here
console.log(studentE1.name);
console.log(studentE1.age);
console.log(studentE1.score);

// E2. Object-ийн утгыг өөрчлөх
// Машины өнгийг "Black" болгож,
// дараа нь бүх object-ийг хэвлэ.

const carE2 = {
  brand: "Toyota",
  year: 2020,
  color: "White",
};

// Expected:
// {
//   brand: "Toyota",
//   year: 2020,
//   color: "Black"
// }

// your code here
const care22 = { ...carE2, color: "Black" };
console.log(care22.brand);
console.log(care22.year);
console.log(care22.color);

// E3. Шинэ property нэмэх
// phone object-д price нэртэй шинэ property нэм.
// Утга нь 2500000 байна.

const phoneE3 = {
  brand: "Samsung",
  model: "S25",
};

// Expected:
// {
//   brand: "Samsung",
//   model: "S25",
//   price: 2500000
// }

// your code here
const phonee33 = { ...phoneE3, price: "2500000" };
console.log(phonee33.brand);
console.log(phonee33.model);
console.log(phonee33.price);

// E4. Object destructuring
// movie object-оос title, year, rating утгуудыг
// destructuring ашиглан салгаж аваад хэвлэ.

const movieE4 = {
  title: "Interstellar",
  year: 2014,
  rating: 9,
};

// Expected:
// Interstellar
// 2014
// 9

// your code here
const { title } = movieE4;
const { year } = movieE4;
const { rating } = movieE4;
console.log(movieE4.title);
console.log(movieE4.year);
console.log(movieE4.rating);

// E5. Array destructuring
// Array-ийн эхний хоёр өнгийг
// firstColor, secondColor хувьсагчид хадгалаад хэвлэ.

const colorsE5 = ["red", "blue", "green", "yellow"];

// Expected:
// red
// blue

// your code here
const [firstColor, secondColor] = colorsE5;
console.log(firstColor);
console.log(secondColor);

// E6. Spread ашиглан object хуулах
// user object-ийг spread ашиглан хуулж,
// copiedUser нэртэй шинэ object үүсгэ.
//
// Do not write:
// const copiedUser = user;

const userE6 = {
  name: "Bataa",
  age: 16,
  level: "Beginner",
};

// Expected:
// {
//   name: "Bataa",
//   age: 16,
//   level: "Beginner"
// }

// your code here
const copiedUser = { ...userE6 };
console.log(copiedUser);

// E7. Хуулаад нэг утгыг өөрчлөх
// product object-ийг өөрчлөхгүйгээр
// updatedProduct нэртэй шинэ object үүсгэ.
// Шинэ object-ийн price нь 180000 байх ёстой.

const productE7 = {
  name: "Keyboard",
  price: 150000,
  color: "Black",
};

// Expected updatedProduct:
// {
//   name: "Keyboard",
//   price: 180000,
//   color: "Black"
// }
//
// Original product must stay unchanged.

// your code here
const updatedProduct = { ...productE7, price: 180000 };
console.log(updatedProduct);

// M1. Function-д object дамжуулах
// showStudent() function бич.
//
// Function нь student object авч,
// дараах өгүүлбэрийг буцаана:
//
// "Anu scored 90 points."

const studentM1 = {
  name: "Anu",
  score: 90,
};

function showStudent(student) {
  console.log(student.name + " scored " + student.score + " points.");
}

console.log(showStudent(studentM1));

// Expected:
// Anu scored 90 points.

// M2. Destructuring ашигладаг function
// getProductInfo() function дотор
// object destructuring ашигла.
//
// name, price, stock утгуудыг салгаж аваад
// өгүүлбэр буцаа.

const productM2 = {
  name: "Monitor",
  price: 850000,
  stock: 5,
};

function getProductInfo(product) {
  const { name, price, stock } = product;
  return `${name} costs ${price} and has ${stock} items in stock`;
}

console.log(getProductInfo(productM2));

// Expected:
// Monitor costs 850000 and has 5 items in stock.

// M3. map() ашиглан нэрүүдийг авах
// Бүх сурагчийн нэрийг агуулсан
// шинэ array үүсгэ.

const studentsM3 = [
  { id: 1, name: "Anu", score: 90 },
  { id: 2, name: "Bat", score: 75 },
  { id: 3, name: "Saraa", score: 85 },
];

// Expected:
// ["Anu", "Bat", "Saraa"]

// your code here
const newArr = studentsM3.map((students) => {
  return students.name;
});
console.log(newArr);

// M4. filter() ашиглан тэнцсэн сурагчдыг авах
// 80 болон түүнээс дээш оноотой сурагчдыг ол.

const studentsM4 = [
  { name: "Anu", score: 90 },
  { name: "Bat", score: 65 },
  { name: "Saraa", score: 85 },
  { name: "Bold", score: 72 },
];

// Expected:
// [
//   { name: "Anu", score: 90 },
//   { name: "Saraa", score: 85 }
// ]

// your code here
const nuuts2 = studentsM4.filter((result) => {
  if (result.score > 80) {
    return result;
  }
});
console.log(nuuts2);

// M5. find() + destructuring
// id нь 3-тай тэнцүү хэрэглэгчийг ол.
// Дараа нь name болон age утгуудыг
// destructuring ашиглан салгаж аваад хэвлэ.

const usersM5 = [
  { id: 1, name: "Anu", age: 15 },
  { id: 2, name: "Bat", age: 17 },
  { id: 3, name1: "Suvd", age: 16 },
];

// Expected:
// Suvd
// 16

// your code here
const idee = usersM5.find((user) => {
  return user.id === 3;
});
const { name1, age } = idee;

console.log(name1, age);

// M6. Array spread ашиглан шинэ элемент нэмэх
// Анхны products array-г өөрчлөхгүйгээр
// newProduct-ийг нэмсэн newProducts array үүсгэ.

const productsM6 = [
  { id: 1, name: "Mouse", price: 50000 },
  { id: 2, name: "Keyboard", price: 120000 },
];

const newProductM6 = {
  id: 3,
  name: "Monitor",
  price: 700000,
};

// Expected newProducts:
// [
//   { id: 1, name: "Mouse", price: 50000 },
//   { id: 2, name: "Keyboard", price: 120000 },
//   { id: 3, name: "Monitor", price: 700000 }
// ]
//
// Original productsM6 must stay unchanged.

// your code here
const newProducts = [...productsM6, newProductM6];
console.log(newProducts);

// H1. Product-ийн үнийг шинэчлэх
//
// 1. id нь 2-той product-ийг find() ашиглан ол.
// 2. Spread ашиглан хуул.
// 3. Шинэ object-ийн price-ийг 150000 болго.
// 4. Анхны object өөрчлөгдөх ёсгүй.

const productsH1 = [
  { id: 1, name: "Mouse", price: 50000 },
  { id: 2, name: "Keyboard", price: 120000 },
  { id: 3, name: "Monitor", price: 700000 },
];

// Expected updatedProduct:
// {
//   id: 2,
//   name: "Keyboard",
//   price: 150000
// }

// your code here
const idek = productsH1.find((user1) => {
  return user1.id === 2;
});

const newPrice = { ...idek, price: 150000 };

console.log(newPrice);

// H2. Оноог нэмэгдүүлэх
//
// Сурагч бүрийн оноонд 5 оноо нэмсэн
// шинэ array үүсгэ.
//
// RULES:
// - Original studentsH2 өөрчлөгдөх ёсгүй.
// - map(), condition, spread ашигла.
// - 100-аас их оноо гарвал 100 болго.

const studentsH2 = [
  { id: 1, name: "Anu", score: 90 },
  { id: 2, name: "Bat", score: 67 },
  { id: 3, name: "Saraa", score: 98 },
];

// Expected:
// [
//   { id: 1, name: "Anu", score: 95 },
//   { id: 2, name: "Bat", score: 72 },
//   { id: 3, name: "Saraa", score: 100 }
// ]

// your code here
const individ = studentsH2.map((student1) => {
  let newScore = student1.score + 5;
  if (newScore > 100) {
    newScore = 100;
  }
  return { ...student1, score: newScore };
});

console.log(individ);

// H3. Бүтээгдэхүүний хямдрал
//
// applyDiscount() нэртэй function бич.
//
// Function нь:
// - product object авна
// - discountPercent авна
// - spread ашиглан шинэ object үүсгэнэ
// - хямдарсан шинэ үнийг буцаана
//
// Original product-ийн үнэ өөрчлөгдөх ёсгүй.

const productH3 = {
  id: 1,
  name: "Headphones",
  price: 200000,
};

function applyDiscount(product, discountPercent) {
  const newProductPrice =
    product.price - discountPercent * (product.price * 0.01);
  const newProduct = { ...product, price: newProductPrice };
  return newProduct;
}

const discountedProductH3 = applyDiscount(productH3, 20);

console.log(discountedProductH3);

// Expected:
// {
//   id: 1,
//   name: "Headphones",
//   price: 160000
// }
//
// Original productH3.price must remain 200000.

// H4. Сурагчдын тайлан
//
// 1. 60 болон түүнээс дээш оноотой сурагчдыг
//    filter() ашиглан ав.
//
// 2. Тэнцсэн сурагч бүрийг map() ашиглан
//    шинэ object болго.
//
// 3. Шинэ object-д хуучин мэдээллийг
//    spread ашиглан хуул.
//
// 4. status: "Passed" property нэм.
//
// 5. message property нэм.
//
// Message format:
// "Anu passed with 90 points."

const studentsH4 = [
  { id: 1, name: "Anu", score: 90 },
  { id: 2, name: "Bat", score: 45 },
  { id: 3, name: "Saraa", score: 78 },
  { id: 4, name: "Bold", score: 55 },
];

// Expected:
// [
//   {
//     id: 1,
//     name: "Anu",
//     score: 90,
//     status: "Passed",
//     message: "Anu passed with 90 points."
//   },
//   {
//     id: 3,
//     name: "Saraa",
//     score: 78,
//     status: "Passed",
//     message: "Saraa passed with 78 points."
//   }
// ]

// your code here
const pass = studentsH4.filter((student2) => {
  student2.status = "Passed";
  student2.message = `${student2.name} passed with ${student2.score} points.`;
  return student2.score >= 60;
});
console.log(pass);

// H5. Shopping cart challenge
//
// 1. stock нь 0-ээс их бүтээгдэхүүнүүдийг filter() ашиглан ав.
//
// 2. Бүтээгдэхүүн бүрийн нийт үнийг:
//    price * quantity
//    томьёогоор ол.
//
// 3. map() болон spread ашиглан
//    бүтээгдэхүүн бүрд totalPrice property нэм.
//
// 4. totalPrice нь 200000-аас их
//    эхний бүтээгдэхүүнийг find() ашиглан ол.
//
// 5. Олсон бүтээгдэхүүний name, totalPrice утгуудыг
//    destructuring ашиглан салгаж аваад хэвлэ.

const cartH5 = [
  {
    id: 1,
    name: "Mouse",
    price: 50000,
    quantity: 2,
    stock: 10,
  },
  {
    id: 2,
    name: "Keyboard",
    price: 120000,
    quantity: 2,
    stock: 5,
  },
  {
    id: 3,
    name: "Monitor",
    price: 700000,
    quantity: 1,
    stock: 0,
  },
  {
    id: 4,
    name: "Headphones",
    price: 150000,
    quantity: 2,
    stock: 3,
  },
];

// Expected final output:
// Keyboard
// 240000
//
// Monitor must not be included because stock is 0.

// your code here
const stock1 = cartH5.filter((product) => {
  product.totalPrice = product.price * product.quantity;
  return product.stock > 0;
});
const stock2 = stock1.find((stock2) => {
  return stock2.totalPrice >= 200000;
});
const { name, totalPrice } = stock2;
console.log(name);
console.log(totalPrice);
