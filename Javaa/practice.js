/* ===========================================================
                      ОПЕРАТОРТОЙ АЖИЛЛАХ ПРАКТИК
=========================================================== */
 
/* ========================= ХЯЛБАР ========================= */
 
// E1. Нас нь 18 буюу түүнээс дээш эсэхийг шалга.
// "Насанд хүрсэн" эсвэл "Хүүхэд" гэж хэвлэ.
const age = 20;
if (age >= 18) {
  console.log("Насанд хүрсэн");
} else {
  console.log("Хүүхэд");
}
 
 
// E2. Хэрэв оноо (score) 60 буюу түүнээс дээш бол 
// "Тэнцсэн" гэж хэвлэ.
const score = 75;
if (score >= 60) {
  console.log("Тэнцсэн");
}
// E3. Хэрэв тоо (number) нь тэгш бол "Тэгш" гэж хэвлэ.
const number = 12;
if (number % 2 === 0) {
  console.log("Тэгш");
}
// E4. Хэрэв тоо (value) нь 0-ээс их бол "Эерэг" гэж хэвлэ.
const value = -3;
if (value > 0) {
  console.log("Эерэг");
}
// E5. Хэрэв нийт дүн (total) 100000-аас дээш бол 
// "Үнэгүй хүргэлт" гэж хэвлэ.
const total = 120000;
if (total > 100000) {
  console.log("Үнэгүй хүргэлт");
}
/* ======================== ДУНД ======================== */
 
// M1. Хэрэглэгчийн нэр "admin" БӨГӨӨД 
// нууц үг нь "1234" бол нэвтрэлт амжилттай болно.
const username = "admin";
const password = "1234";
if (username === "admin" && password === "1234") {
  console.log("Нэвтрэлт амжилттай");
}
 
 
// M2. Хэрэв оноо >= 60 БӨГӨӨД 
// ирц >= 80 бол сурагч тэнцэнэ.
const score2 = 70;
const attendance = 85;
if (score2 >= 60 && attendance >= 80) {
  console.log("Сурагч тэнцэнэ");
}
// M3. Хэрэглэгч гишүүн (isMember) нь үнэн (true) ЭСВЭЛ 
// нийт үнийн дүн > 100000 бол хөнгөлөлт авна.
const isMember = false;
const totalSpent = 150000;
if (isMember === true || totalSpent > 100000) {
  console.log("Хөнгөлөлт авна");
}
 
// M4. Нас (age) нь 13-аас 19-ийн хооронд байвал 
// "Өсвөр насныхан" гэж хэвлэ.
const age2 = 16;
if (age2 >= 13 && age2 <= 19) {
  console.log("Өсвөр насныхан");
}
// M5. Хэрэв гараг (day) нь Бямба ЭСВЭЛ Ням байвал 
// "Амралтын өдөр" гэж хэвлэ.
const day = "Sunday";
if (day === "Saturday" || day === "Sunday") {
  console.log("Амралтын өдөр");
}
/* ========================= ХЭЦҮҮ ========================= */
 
// H1. Хэрэв оноо (score) 90-ээс 100-ийн хооронд байвал 
// "Онц" гэж хэвлэ.
const score3 = 94;
if (score3 >= 90 && score3 <= 100) {
  console.log("Онц");
}
 
 
// H2. Зөвхөн хэрэглэгч нэвтэрсэн (isLoggedIn) БӨГӨӨД 
// эрх (role) нь admin ЭСВЭЛ moderator байвал нэвтрэх эрх олго.
const isLoggedIn = true;
const role = "moderator";
if (isLoggedIn && (role === "admin" || role === "moderator")) {
  console.log("Нэвтрэх эрх олгогдлоо");
}
 
 
// H3. Нас >= 18 БӨГӨӨД өндөр >= 160 БӨГӨӨД 
// ID карттай (hasID) бол "Шаардлага хангасан" гэж хэвлэ.
const age3 = 22;
const height = 170;
const hasID = true;
if (age3 >= 18 && height >= 160 && hasID) {
  console.log("Шаардлага хангасан");
}
 
 
// H4. Өндөр жилийн дүрмийг ашиглан 
// өгөгдсөн жил "Өндөр жил" мөн эсэхийг шалгаж хэвлэ.
const year = 2024;
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log("Өндөр жил");
}
 else {
    console.log("Өндөр жил биш");
}
// H5. Нууц үгийн урт (length) >= 8 БӨГӨӨД 
// (тоо агуулсан (hasNumber) ЭСВЭЛ тэмдэгт агуулсан (hasSymbol)) бол 
// "Хүчтэй нууц үг" гэж үзнэ.
const length = 10;
const hasNumber = true;
const hasSymbol = false;
if (length >= 8 && (hasNumber || hasSymbol)) {
    console.log("Хүчтэй нууц үг");
}
else {
    console.log("Хүчтэй нууц үг биш");
}