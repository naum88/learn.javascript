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

// function combine(...obj) {
//   obj.reduce((res, Object) => {
//     for(let key in Object) {
//       if(res[key]) {
//         res[key] +=Object
//       } else {
//         res[key] = Object[key]
//       }
//     }
//   }, {})
// }

// const combine = (...objects) =>
//   objects.reduce((result, object) => {
//     for (const key in object) {
//       if (result[key]) {
//         result[key] += object[key]
//       } else result[key] = object[key]
//     }
//     return result
//   }, {})

// function nbDig(n, d) {
//   let arr= [];
//   let count = 0;
//   for(let i = 0; i <= n; i++) {
//     arr.push(i*i);
//   }
//   //console.log(arr);
//   let arrNew = arr.join('').split('');
//   //console.log(arrNew);
//   for(let j = 0; j < arrNew.length; j++) {
//     if(arrNew[j] == d) {
//       //console.log(arrNew[j]);
//       count++
//     }
//   }
//   console.log(count);
//   return count
// }
// nbDig(10, 1) //4

// function findMissing(arr1, arr2) {
//   let newArr1 = arr1.sort((a, b) => a - b);
//   let newArr2 = arr2.sort((a, b) => a - b);
//   for(let i = 0; i < newArr1.length; i++) {
//     for(let j = 0; j < newArr2.length; j++) {
//       if(newArr1[i] != newArr2[j]) {
//         console.log(newArr2[j]);
//       }
//     }
//   }
// }
// findMissing([9, 1, 2, 3], [1, 3])//, 2);

// function getDecimal(n){
//   let num = Math.abs(n);
//   //console.log(num);
//   let res = 0;
//   if(Number.isInteger(num)) {
//     console.log(0);
//     return 0;
//   } else {
//     res = num - Math.floor(num);
//     console.log(+res.toFixed(1));
//     return +res.toFixed(2);
//   }
// }
// getDecimal(1.2);
// getDecimal(-1.2);
// getDecimal(1)

// function maxTriSum(numbers){
//   let num = [...new Set(numbers)];
//   //console.log(num);
//   let numSort = num.sort(function(a, b) {
//     return b - a;
//   });
//   console.log(numSort);
//   let res = numSort[0] + numSort[1] +numSort[2];
//   return res;
// }
// maxTriSum([3,2,6,8,2,3])//,17);
// maxTriSum([-3,-27,-4,-2,-27,-2])//,-9);

// function whoseBicycle(diary1, diary2, diary3) {
//   let sumOne = 0;
//   let sumTwo = 0;
//   let sumThree = 0;
//   for(let grade of Object.values(diary1)) {
//     sumOne += grade;
//   }
//   for(let grade of Object.values(diary2)) {
//     sumTwo += grade;
//   }
//   for(let grade of Object.values(diary3)) {
//     sumThree += grade;
//   }
//   console.log(sumOne, sumThree, sumTwo);
//   if(sumOne > sumTwo && sumOne > sumThree) {
//     return 'I need to buy a bicycle for my first son.'
//   } else if(sumOne < sumTwo && sumTwo > sumThree) {
//     return 'I need to buy a bicycle for my second son.'
//   } else if(sumOne < sumThree && sumTwo < sumThree) {
//     return 'I need to buy a bicycle for my third son.'
//   } else if(sumOne == sumTwo && sumOne < sumThree) {
//     return 'I need to buy a bicycle for my third son.' //+
//   } else if(sumOne == sumTwo && sumOne > sumThree) {
//     return 'I need to buy a bicycle for my second son.'
//   } else if(sumOne == sumThree && sumOne < sumTwo) {
//     return 'I need to buy a bicycle for my second son.'
//   } else if(sumOne == sumThree && sumOne > sumTwo) {
//     return 'I need to buy a bicycle for my third son.'
//   } else if(sumOne == sumThree && sumThree == sumTwo) {
//     return 'I need to buy a bicycle for my third son.'
//   } else if(sumTwo == sumThree && sumTwo < sumOne) {
//     return 'I need to buy a bicycle for my first son.' //+
//   } else if(sumTwo == sumThree && sumTwo > sumOne) {
//     return 'I need to buy a bicycle for my third son.'
//   } 
// }
// whoseBicycle(
//   {
//     'algebra': 6,
//     'history': 7,
//     'physics': 8,
//     'geography': 9,
//     'chemistry': 10
//   },
//   {
//     'algebra':6,
//     'history': 7,
//     'physics': 8,
//     'geography': 9,
//     'chemistry': 10
//   },
//   {
//     'algebra': 6,
//     'history': 7,
//     'physics': 8,
//     'geography': 9,
//     'chemistry': 10
//   }
// ) 

// function nicknameGenerator(name){
//   let arr = name.split('');
//   //console.log(arr);
//   if(arr.length < 4) {
//     console.log('Error: Name too short');
//     return 'Error: Name too short';
//   } else if(name[2] == 'a' || name[2] == 'e' || name[2] == 'i' || name[2] == 'o' || name[2] == 'u') {
//     //console.log(arr[2]);
//     let res = arr.slice(0, 4).join('');
//     console.log(res);
//     return res;
//   } else {
//       let res = arr.slice(0, 3).join('');
//       console.log(res);
//       return res;
//   }
// }
// nicknameGenerator("Jieemy")//, "Jim");
// //nicknameGenerator("Samantha")//, "Sam");
// nicknameGenerator("Sam")//, "Error: Name too short");
// //nicknameGenerator("Kayne")//, "Kay", "'y' is not a vowel");
// nicknameGenerator("Melissa")//, "Mel");
// //nicknameGenerator("James")//, "Jam");

// function sortMyString(S) {
//   let arr = S.split('');
//   let odd = [];
//   let even = [];
//   //console.log(arr);
//   for(let i = 0; i < arr.length; i++) {
//     if(i % 2 === 0) {
//       odd.push(arr[i]);
//     } else {
//       even.push(arr[i]);
//     }
//   }
//   console.log(odd);
//   console.log(even);
//   let res = odd.join('') + ' ' + even.join('');
//   console.log(res);
//   return res
// }
// sortMyString("CodeWars")//, "CdWr oeas");
// sortMyString("YCOLUE'VREER")//, "YOU'RE CLEVER");   

// function isPowerOfTwo(n){
//   let num = Math.log2(n);
//   console.log(num.toFixed(2));
//   if(num == 1) {
//     return true
//   }
//   if(num.toFixed(2) % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }

// }
// isPowerOfTwo(2)//, true)
// isPowerOfTwo(4096)//, true)
// isPowerOfTwo(5)//, false)

// let List = [
//   {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
//   {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
//  ];
//  function sentence(List) {
//   let arrSort = List.sort((a, b) => Object.keys(a) - Object.keys(b)).map(e => Object.values(e)).join(' ');
//   console.log(arrSort);
// }
// sentence(List);

// function minSum(arr) {
//   let sum = 0;
//   let newArr = arr.sort((a, b) => a - b);
//   for(let i = 0; i < newArr.length / 2; i++) {
//     sum += newArr[i] * newArr[newArr.length - 1 - i];
//     //console.log(`sum += ${newArr[i]} * ${newArr[newArr.length - 1 - i]}`);
//   }
//   //console.log(sum);
//   return sum;
// }
// minSum([5,4,2,3])//, 22);
// minSum([12,6,10,26,3,24])//, 342);
// minSum([9,2,8,7,5,4,0,6])//, 74);

// function vowelOne(s){
//   let arr = s.toLowerCase().split('');
//   let resArr = [];
//   //console.log(arr);
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') { //aeiou
//       resArr.push(1);
//     } else {
//       resArr.push(0)
//     }
//   }
//   console.log(resArr.join(''));
//   return resArr.join('');
// }
// vowelOne( "vowelOne" )//, "01010101" );
// vowelOne( "123, arou" )//, "000001011" );

// function reverseWords(str){
//   let arr = str.split(' ').reverse().join(' ');
//   console.log(arr);
//   return arr; // reverse those words
// }
// reverseWords("yoda doesn't speak like this" )//,  "this like speak doesn't yoda")

// function dataReverse(data) {
//   let dataNewArr = [];
//   for(let i = 0; i < data.length; i= i +8) {
//     dataNewArr.push(...data.slice(i, i +8))
//     dataNewArr.push('/')
//   }
//   //console.log(dataNewArr.join('').split('/').reverse().join(''));
//   let dataNewArrRes = dataNewArr.join('').split('/').reverse().join('');
//   let res = [];
//   for(let i = 0; i < dataNewArrRes.length; i++) {
//     res.push(+dataNewArrRes[i]);
//   }
//   //console.log(res);
//   //console.log([1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]);
//   return res;
// }
// dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]);//[1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]

// function toReadable(number) {
//   const digits = {
//     0:"zero",
//     1: "one",
//     2: "two",
//     3: "three",
//     4: "four",
//     5: "five",
//     6: "six",
//     7: "seven",
//     8: "eight",
//     9: "nine",
//     10: "ten",
//     11: "eleven",
//     12: "twelve",
//     13: "thirteen",
//     14: "fourteen",
//     15: "fifteen",
//     16: "sixteen",
//     17: "seventeen",
//     18: "eighteen",
//     19: "nineteen"
//   };
//   const decimal = {
//     10: "ten",
//     20: "twenty",
//     30: "thirty",
//     40: "forty",
//     50: "fifty",
//     60: "sixty",
//     70: "seventy",
//     80: "eighty",
//     90: "ninety"
//   };
//   switch(number.toString().length) {
//     case 1:  //до 10
//     //console.log(number.toString().length);
//     //console.log(`${number.toString().length}`);
//     //console.log(`${digits[number]}`);
//       return `${digits[number]}`;
//       break;
//     case 2: //до 100
//       if(number.toString()[1] === '0') {
//         //console.log(number.toString()[1]);
//         //console.log(`${decimal[number]}`);
//         return `${decimal[number]}`
//       } else if(number.toString()[1] !== '0' && number < 20) {
//         //console.log(number.toString()[1]);
//         //console.log(`${digits[number]}`);
//         return `${digits[number]}`
//       } else {
//         //console.log(number.toString()[0], number.toString()[1]);
//         //console.log(`${decimal[number.toString()[0] * 10]} ${digits[number.toString()[1]]}`);
//         return `${decimal[number.toString()[0] * 10]} ${digits[number.toString()[1]]}`
//       }
//       break;
//     case 3:
//       if(number.toString()[1] === '0' && number.toString()[2] === '0') {
//         //console.log(`${digits[number.toString()[0]]} hundred`);
//         return `${digits[number.toString()[0]]} hundred`;
//       } else if(number.toString()[2] === '0') {
//         //console.log(`${digits[number.toString()[0]]} hundred ${decimal[number.toString()[1] * 10]}`);
//         return `${digits[number.toString()[0]]} hundred ${decimal[number.toString()[1] * 10]}`;
//       } else if(number.toString()[1] === '0' && number.toString()[2] !== '0') {
//         //console.log(`${digits[number.toString()[0]]} hundred ${digits[number.toString()[2]]}`);
//         return `${digits[number.toString()[0]]} hundred ${digits[number.toString()[2]]}`
//       } else {
//         let num = number - number.toString()[0] * 100;
//         //console.log(num);
//         if(num > 20) {
//           console.log(`${digits[number.toString()[0]]} hundred ${decimal[number.toString()[1] * 10]} ${digits[number.toString()[2]]}`);
//           return `${digits[number.toString()[0]]} hundred ${decimal[number.toString()[1] * 10]} ${digits[number.toString()[2]]}`;
//         } else {
//           console.log(`${digits[number.toString()[0]]} hundred ${digits[num]}`);
//         }
//       }
//       break;
//   }
// }
// toReadable(120);
// toReadable(411);
// toReadable(437);
// toReadable(800);
// toReadable(604);

// function towelSort(matrix) {
//   matrix.map((el, index) => {
//     if(index % 2) el.reverse()
//   });
//   //console.log(matrix);
//   let result = matrix.reduce((acc, val) => acc.concat(val), []);
//   //console.log(result);
//   return result;
// }
// towelSort([
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ],
//  ]);

// function strCount(obj){
//   let arr = [];
//   let count = 0;
//   for (var key in obj) {
//     arr.push(obj[key]);
//   }
//   //console.log(arr);
//   let newArr = arr.reduce((acc, val) => acc.concat(val), []); 
//   console.log(newArr);
//   for(let i = 0; i <= newArr.length; i++) {
//     if(typeof newArr[i] === 'string') {
//       count++;
//     }
//   }
//   console.log(count);
//   return count;
// }
// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   }) //returns 3

// var countBits = function(n) {
//   let count = 0;
//   let num = n.toString(2).split('')
//   console.log(num);
//   for(let i = 0; i < num.length; i++) {
//     if(num[i] == 1) {
//       count++;
//     }
//   }
//   console.log(count);
//   return count;
// };
// countBits(0)//, 0);
// countBits(4)//, 1);
// countBits(7)//, 3);
// countBits(9)//, 2);
// countBits(10)//, 2);

// function nearestSq(n){
//   let sq = Math.pow(Math.round(Math.sqrt(n)), 2);
//   console.log(sq);
//   return sq;
// }
// nearestSq(1)//, 1, "nearestSq(1) = 1");
// nearestSq(2)//, 1, "nearestSq(2) = 1");
// nearestSq(10)//, 9, "nearestSq(10) = 9");
// nearestSq(111)//, 121, "nearestSq(111) = 121");
// nearestSq(9999)//, 10000, "nearestSq(9999) = 10000");

// function addLength(str) {
//   let arr = str.split(' ');
//   //console.log(arr);
//   let res = [];
//   for(let i = 0; i < arr.length; i++) {
//     let l = arr[i].length;
//     //console.log(l);
//     res.push(`${arr[i]} ${l}`)
//   }
//   console.log(res);
//   return res;
// }
// addLength('you will win')//,["you 3", "will 4", "win 3"]
// addLength("apple ban") //--> ["apple 5", "ban 3"]

// var whatTimeIsIt = function(angle) {
//   if(angle === 0 || angle === 360) {
//     return "12:00"
//   }
//   let mins = angle / 2;
//   let h = Math.floor(mins / 60);
//   let m = Math.floor(mins % 60);
//   if(h == 0) {
//     h = '12';
//   }
//   if(h < 10) {
//     h = '0' + h;
//   }
//   if(m < 10) {
//     m = '0' + m;
//   }
//   return h+':'+m
// }
// whatTimeIsIt(0)//, "12:00");
// whatTimeIsIt(90)//, "03:00");
// whatTimeIsIt(180)//, "06:00");
// whatTimeIsIt(270)//, "09:00");
// whatTimeIsIt(360)//, "12:00");   

// function toWeirdCase(str){
//   let arr = str.split(' ');
//   let newArr = [];
//   console.log(arr);
//   for(let i = 0; i < arr.length; i++) {
//     if(i > 0) {
//       newArr.push('+');
//     }
//     //console.log(arr[i]);
//     for(let j = 0; j < arr[i].length; j++) {
//       // newArr.push(' ');
//       //console.log(arr[i][j]);
//       if(j % 2 == 0) {
//         newArr.push(arr[i][j].toUpperCase());
//       } else {
//         newArr.push(arr[i][j]);
//       }
//       // console.log(arr[i][j]);
//     }
//   }
//   console.log(newArr.join(''));
//   let res = newArr.join('').split('+').join(' ');
//   console.log(res);
//   return res;
// }
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

// function likes(names) {
//   let num = names.length;
//   //console.log(num);
//   if(num === 0) {
//     return 'no one likes this';
//   } else if(num === 1) {
//     //console.log(names[0]);
//     return `${names[0]} likes this`;
//   } else if(num === 2) {
//     return`${names[0]} and ${names[1]} like this`;
//   } else if(num === 3) {
//     return`${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else if(num > 3) {
//     //console.log(`${num-2}`);
//     return`${names[0]}, ${names[1]} and ${num-2} others like this`;
//   }
// }
// likes([])//, 'no one likes this');
// likes(['Peter'])//, 'Peter likes this');
// likes(['Jacob', 'Alex'])//, 'Jacob and Alex like this');
// likes(['Max', 'John', 'Mark'])//, 'Max, John and Mark like this');
// likes(['Alex', 'Jacob', 'Mark', 'Max'])//, 'Alex, Jacob and 2 others like this');