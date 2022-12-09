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

// function findMultiples(integer, limit) {
//   let result = [];
//   for(let i = integer; i <= limit; i += integer) {
//     result.push(i);
//   }
//   console.log(result);
//   return result;
// }
// findMultiples(5, 25);//, [5, 10, 15, 20, 25])

// function expressionMatter(a, b, c) {
//   let num1 = a * b * c;
//   let num2 = a * (b + c);
//   let num3 = a * b + c;
//   let num7 = (a * b) * c;
//   let num8 = a * (b * c);
//   let num4 = a + b * c;
//   let num5 = (a + b) * c;
//   let num6 = a + (b * c);
//   let num9 = a + b + c;
//   let arr = [];
//   arr.push(num1, num2, num3, num4, num5, num6, num7, num8, num9);
//   //console.log(arr);
//   let result = Math.max(...arr);
//   console.log(result);
//   return result// highest achievable result
// }
// expressionMatter(2, 2, 2)//, 8);

// function sayHello( name, city, state ) {
//   let res = '';
//   if(name.length == 2) {
//     res = `Hello, ${name[0]} ${name[1]}! Welcome to ${city}, ${state}!`;
//   } else if(name.length == 3) {
//     res = `Hello, ${name[0]} ${name[1]} ${name[2]}! Welcome to ${city}, ${state}!`;
//   } else if(name.length == 4) {
//     res = `Hello, ${name[0]} ${name[1]} ${name[2]} ${name[3]}! Welcome to ${city}, ${state}!`;
//   }
    
//   console.log(res);
//   return res;
// }
// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')//, 'Hello, John Smith! Welcome to Phoenix, Arizona!')
// sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois')//, 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!')

// function calculator(a,b,sign){
//   if(sign === '+' || sign === '-' || sign === '*' || sign === '/') {
//     if(typeof a === 'number' && typeof b === 'number') {
//       //console.log(1);
//       if(sign === '+') {
//         //console.log(a + b);
//         return a + b;
//       } else if(sign === '-') {
//         return a - b;
//       } else if(sign === '*') {
//         return a * b;
//       } else if(sign === '/') {
//         return a / b;
//       }
//     } else {
//       //console.log(2);
//       return "unknown value";
//     }
//   } else {
//     return "unknown value";
//   }

// }
//calculator(1,2,"+")//, 3, "calculate");
//calculator(1,2,"-")//, -1, "calculate");
//calculator(3,5,"*")//, 15, "calculate");
//calculator(6,2,"/")//, 3, "calculate");
//calculator(6,2,"$")//, "unknown value", "calculate"); 
//calculator(6,"h","*")//, "unknown value", "calculate"); 

// function logs(x , a, b){
//   let res = (Math.log(a) / Math.log(x)) + (Math.log(b) / Math.log(x));
//   console.log(res);
//   return res;
// }
// logs(10, 2, 3)//, 0.7781512503836435);
// logs(5, 2, 3)//, 1.1132827525593785);
// logs(1000, 2, 3)//, 0.25938375012788123);

// function stringToArray(string){
//   let res = string.split(' ');
//   console.log(res);
//   return res;
// }
// stringToArray("Robin Singh")//, ["Robin", "Singh"]);

// function howMuchILoveYou(nbPetals) {
//   let words = ["I love you",
//   "a little",
//   "a lot",
//   "passionately",
//   "madly",
//   "not at all"];

//   while(nbPetals > 6) {
//     nbPetals -= 6;
//     //console.log(nbPetals);
//   }
//   console.log(nbPetals);
//     if(nbPetals === 1) {
//       return words[0];
//     } else if(nbPetals === 2) {
//       return words[1];
//     } else if(nbPetals === 3) {
//       return words[2];
//     } else if(nbPetals === 4) {
//       return words[3];
//     } else if(nbPetals === 5) {
//       return words[4];
//     } else if(nbPetals === 6) {
//       return words[5];
//     }
// }
// howMuchILoveYou(20)//,"I love you")
//howMuchILoveYou(3)//,"a lot")
//howMuchILoveYou(6)//,"not at all")

// function getAverage(marks){
//     let num = marks.length;
//     //console.log(num);
//     let sum = 0;
//     for(let i = 0; i < marks.length; i++) {
//       sum += marks[i]
//     }
//     //console.log(sum);
//     let res = Math.round(sum / num)
//     console.log(res);
//     return res
// }
// getAverage([2,2,2,2])//,2);
// getAverage([1,2,3,4,5,])//,3);
// getAverage([1,1,1,1,1,1,1,2])//,1);

// function validateUsr(username) {
//   let zero = 0;
//   let num = 0;
//   //console.log(username.length);
//   if(username.length >= 4 && username.length <= 16) {
//     for(let i = 0; i < username.length; i++) {
//       if(username[i] === ' ')
//         zero += 1;
//     } 
//     for(let j = 0; j < username.length; j++) {
//       if(username[j].toLowerCase() === username[j]) {
//         num += 0;
//       } else {
//         num += 1;
//       }
//     }
//     //console.log(zero);
//     console.log(num);
//     if(zero == 0 && num == 0) {
//       console.log('true');
//       //return true;
//     } else {
//       console.log('false');
//       //return false;
//     }
//   } else {
//     return false
//   }
// }
// validateUsr('asd43 34')//, false
// validateUsr('asd4334')

// function drawStairs(n) {
//   let res = '';
//   let x = ' '
//   let num = 0;
//   while(num < n) {
//     res +=  'I\n';
//     num++;
//     res += ' '.repeat(num)
//   }
//   console.log(res);
// }
// drawStairs(6);

// function isPythagoreanTriple(integers) {
//   let arr = integers.sort(function(a, b){return a-b});
//   console.log(arr);
//   let one = arr[0]**2 + arr[1]**2;
//   let two = arr[2]**2;
//   console.log(one, two);
//   if(one === two) {
//     return true;
//   } else {
//     return false;
//   }
// }
// isPythagoreanTriple([5, 4, 3])//, true);
// isPythagoreanTriple([3, 5, 9])//, false);

// function uefaEuro2016(teams, scores){
//   if(scores[0] > scores[1]) {
//     let res = `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
//     console.log(res);
//     //return res;
//   } else if(scores[0] < scores[1]) {
//     let res = `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
//     console.log(res);
//     //return res;
//   } else if(scores[0] == scores[1]) {
//     let res = `At match ${teams[0]} - ${teams[1]}, teams played draw.`
//     console.log(res);
//     //return res
// }
// }
// uefaEuro2016(['Germany', 'Ukraine'], [2, 0])//, "At match Germany - Ukraine, Germany won!");
// uefaEuro2016(['Belgium', 'Italy'], [0, 2])//, "At match Belgium - Italy, Italy won!");
// uefaEuro2016(['Portugal', 'Iceland'], [1, 1])//, "At match Portugal - Iceland, teams played draw.");

// function abbrevName(name){
//   let arr = name.split(' ');
//   //console.log(arr);
//   let one = arr[0];
//   let two = arr[1];
//   //console.log(one[0]);
//   let res = `${one[0]}.${two[0]}`;
//   console.log(res.toUpperCase());
//   return res
// }
// abbrevName("sam harris")//, "S.H");
// abbrevName("Patrick Feenan")//, "P.F");
// abbrevName("Evan Cole")//, "E.C");

// function oddCount(n) {
//   let arr = [];
//   for(let i = 1; i < n; i++) {
//     //console.log(i)
//     if(i % 2 !== 0) {
//       arr.push(i)
//     }
//   }
//   console.log(arr.length);
//   return arr.length
// }
// oddCount(15), 7

function combine(...obj) {
  obj.reduce((res, Object) => {
    for(let key in Object) {
      if(res[key]) {
        res[key] +=Object
      } else {
        res[key] = Object[key]
      }
    }
  }, {})
}



// const combine = (...objects) =>
//   objects.reduce((result, object) => {
//     for (const key in object) {
//       if (result[key]) {
//         result[key] += object[key]
//       } else result[key] = object[key]
//     }

//     return result
//   }, {})