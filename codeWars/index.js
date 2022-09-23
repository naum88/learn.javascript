// function unluckyDays(year){
//   let count = 0;
//   for(let i = 0; i < 12; i++) {
//     let dayNeed = new Date(year, i, 13);
//     if(dayNeed.getDay() == 5) {
//       count++
//     }
//   }
//   console.log(count);
//   return count
// }
// unluckyDays(2015)// == 3
// unluckyDays(1986)// == 1

// var runLengthEncoding = function(str){
//   let result = [];
//   let count = 1;
//   for(let i = 0; i < str.length; i++) {
//     if(str[i] !== str[i+1]) {
//       result.push([count, str[i]]);
//       count = 1;
//     } else {
//       count++
//     }
//   }
//   console.log(result);
//   return result;
// } 
// runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"); //,[[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']]

// function noSpace(x){
//   let result = '';
//   for(let i = 0; i < x.length; i++) {
//     if(x[i] !== ' ') {
//       result += x[i];
//     }
//   }
//   console.log(result);
//   return result;
// }
// noSpace('8 j 8   mBliB8g  imjB8B8  jl  B');//, '8j8mBliB8gimjB8B8jlB');

// var summation = function (num) {
//   let sum = 0;
//   for(let i = 1; i <= num; i++) {
//     sum += i
//   }
//   console.log(sum);
//   return sum;
// }
// summation(8);//, 36)