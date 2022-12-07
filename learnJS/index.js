// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// console.log(user);
// user.name = 'Pete';
// console.log(user);
// delete user.name;
// console.log(user);

// function ucFirst(str) {
//   let num = str.length;
//  let newStr = str[0].toUpperCase() +  str.slice(1, num);
//  console.log(newStr);
// }
// ucFirst("вася")// == "Вася";

// function checkSpam(str) {
//   if(str.includes('ViAgRA') || str.includes('xxx')) {
//     console.log(1);
//   } else {
//     console.log(0);
//   }
// }
// checkSpam('buy ViAgRA now')// == true
// checkSpam('free xxxxx')// == true
// checkSpam("innocent rabbit")// == false

// function truncate(str, number) {
//   let num = str.length;
//   if(num > number) {
//     console.log(str.slice(0, number-1) + '...');
//   } else {
//     console.log(str);
//   }
// }
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)// = "Вот, что мне хотело…"
// truncate("Всем привет!", 20)// = "Всем привет!"