// function squareSum(numbers){
//   let newNum = numbers.map((num) => num ** 2);
//   //console.log(newNum);
//   let res = newNum.reduce(function(acc, val) { return acc + val; }, 0);
//   console.log(res);
//   return res;
// }
// squareSum([1,2])//, 5);
// squareSum([0, 3, 4, 5])//, 50);
// squareSum([])//, 0);

// function noSpace(x){
//   let arr = [];
//   for(let i = 0; i < x.length; i++) {
//     if(x[i] !== ' ') {
//       arr.push(x[i]);
//     }
//   }
//   console.log(arr);
//   let res = arr.join('');
//   console.log(res);
//   return res;
// }
// noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')//, '8j8mBliB8gimjB8B8jlB');
// noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')//, '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
// noSpace('8aaaaa dddd r     ')//, '8aaaaaddddr'); 

// function disemvowel(str) { //a, e, i, o, u, 
//   let arr = [];
//   for(let i = 0; i < str.length; i++) {
//     if(str[i].toLowerCase() !== 'a' && str[i].toLowerCase() !== 'e' && str[i].toLowerCase() !== 'i' && str[i].toLowerCase() !== 'o' && str[i].toLowerCase() !== 'u') {
//       arr.push(str[i])
//     } 
//   }
//   //console.log(arr);
//   let res = arr.join('');
//   console.log(res);
//   return res;
// }
// disemvowel("This website is for losers LOL!")//, "Ths wbst s fr lsrs LL!")
// disemvowel("No offense but,\nYour writing is among the worst I've ever read")//, "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
// disemvowel("What are you, a communist?")//, "Wht r y,  cmmnst?")

// function isIsogram(str){
//   let count = 0;
//   if(str.length === 0) {
//     return true;
//   }
//   let arr = str.toLowerCase().split('');
//   let arrSort = arr.sort();
//   //console.log(arrSort);
//   for(let i = 0; i < arrSort.length; i++) {
//     if(arrSort[i] === arrSort[i+1]) {
//       count++;
//     }
//   }
//   console.log(count);
//   if(count === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// isIsogram("Dermatoglyphics")//, true );
// isIsogram("isogram")//, true );
// isIsogram("aba")//, false, "same chars may not be adjacent" );
// isIsogram("moOse")//, false, "same chars may not be same case" );
// isIsogram("isIsogram")//, false );
// isIsogram("")//, true, "an empty string is a valid isogram" );

// function brightest(colors){
//   let indexCol = 0;
//   let maxNum = 0;
//   for(let i = 0; i < colors.length; i++) {
//     let color = colors[i];
//     let rCol = parseInt(color.slice(1,3), 16);
//     let gCol = parseInt(color.slice(3,5), 16);
//     let bCol = parseInt(color.slice(5,7), 16);
//     let num = Math.max(r,g,b);
//     if(num > maxNum) {
//       maxNum = num;
//       indexCol = i;
//     }
//   } 
//   return colors[indexCol];
// }
// dotest(["#001000", "#000000"], "#001000");
// dotest(["#ABCDEF", "#123456"], "#ABCDEF");
// dotest(["#00FF00", "#FFFF00"], "#00FF00");
// dotest(["#FFFFFF", "#1234FF"], "#FFFFFF");
// dotest(["#FFFFFF", "#123456", "#000000"], "#FFFFFF");

// function SafeInteger(n) {
//   let maxNum = Math.pow(2, 53) -1;
//   let minNum = -Math.pow(2, 53) -1;
//   if(n < maxNum && n > minNum) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function explode(s) {
//   let arr = s.split('');
//   //console.log(arr);
//   let arrNew = [];
//   for(let i = 0; i < arr.length; i++) {
//     let count = s[i];
//     while(count > 0) {
//         arrNew.push(s[i]);
//         count--;
//     }
//   }
//   //console.log(arrNew);
//   let result = arrNew.join('');
//   //console.log(result);
//   return result;
// }
// explode("312");//"333122"
// explode("102269");//"12222666666999999999"
// explode("0"); //''
// explode("000"); //''
// explode("123");//"122333"

// function calculate(...a) { // каррирование
//   return (...b) => {
//     //console.log(a,  b);
//     let numOne = a;
//     let numTwo = b;
//     //console.log(numOne);
//     let arr = a.concat(b);
//     //console.log(arr);
//     let res = arr.reduce((partialSum, a) => partialSum + a, 0);
//     console.log(res);
//     return res;
//   }
// }
// calculate(1)(1)//, 2);
// calculate(1,1)(1)// , 3);
// calculate(1,1)(1,-1)//, 2);
// calculate(2,4)(3,7,1)//, 17);

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   let oneDate = new Date(currentDate);
//   let oneDateTime = oneDate.getTime();
//   //console.log(oneDateTime);
//   let twoDate = new Date(expirationDate);
//   let twoDateTime = twoDate.getTime();
//   if(enteredCode === correctCode && twoDateTime >= oneDateTime) {
//     console.log('true');
//     return true;
//   } else {
//     console.log('false');
//     return false;
//   }
// }
// checkCoupon('123','123','September 5, 2014','October 1, 2014')//, true);
// checkCoupon('123a','123','September 10, 2014','October 1, 2014')//, false);

// function getLengthOfMissingArray(arrayOfArrays) {
//   if(arrayOfArrays == null) return 0
// if(arrayOfArrays == [] || arrayOfArrays.length == 0) return 0
//   let arr = [];
//   for(let i = 0; i < arrayOfArrays.length; i++) {
//     let numLength = arrayOfArrays[i].length;
//     arr.push(numLength);
//   }
//   //console.log(arr);
//   let res = []
//   let arrSort = arr.sort((a, b) => a - b);
//   console.log(arrSort);
//   for(let j = 0; j < arrSort.length; j++) {
//     if((arrSort[j] +1) !== arrSort[j+1]) {
//       //console.log(arrSort[j] +1); 
//       res.push(arrSort[j] +1);
//       break;
//     }
//   }
//   let result = +res
//   console.log(result);
//   return result;

// }
// getLengthOfMissingArray([[], [ 1, 2, ], [ 4, 5, 1, 1 ], [ 1,2 ], [ 5, 6, 7, 8, 9 ]] )//, 3);
// getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] )//, 2);
// getLengthOfMissingArray([ [ null ], [ null, null, null ] ] )//, 2);
// getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] )//, 5);
// getLengthOfMissingArray([ ])//, 0);
// getLengthOfMissingArray([[4],
//   [],
//   [4, 2, 3],
//   [1, 2, 3, 0],
//   [3, 0, 3, 4, 2, 1],
//   [4, 0, 4, 3, 1]]);
// getLengthOfMissingArray([[],
//   [2, 0, 3],
//   [2, 2],
//   [3],
//   [1, 3, 0, 3],
//   [1, 3, 3, 1, 3],
//   [1, 3, 0, 1, 3, 3, 3, 1],
//   [3, 1, 0, 1, 2, 0, 3, 2, 2, 4],
//   [1, 1, 3, 1, 4, 2, 3],
//   [2, 1, 0, 4, 4, 2, 4, 1, 4],
//   [2, 0, 1, 1, 3, 4, 4, 4, 4, 2, 4]])

// function getLengthOfMissingArray(arrayOfArrays) {
//   let arr = [];
//   for(let i = 0; i < arrayOfArrays.length; i++) {
//     if(arrayOfArrays === null || arrayOfArrays[i] === null || arrayOfArrays[i].length === null) {
//       return 0;
//     }
//     arr.push(arrayOfArrays[i].length);
//   }
//   arr.sort((a, b) => a - b)
//   console.log(arr);
//   for(let j = 0; j <arr.length; j++) {
//     if(arr[j] + 1 !== arr[j+ 1]) {
//       console.log(arr[j] +1);
//       return arr[j]+1;  
//     }
//   }
//   return 0;
// }
// getLengthOfMissingArray([[], [ 1, 2, ], [ 4, 5, 1, 1 ], [ 1,2 ], [ 5, 6, 7, 8, 9 ]] )//, 3);
// getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] )//, 2);
// getLengthOfMissingArray([ [ null ], [ null, null, null ] ] )//, 2);
// getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] )//, 5);
// getLengthOfMissingArray([ ])//, 0);

// function numberOfPairs(gloves) {
//   let glovesSort = gloves.slice(0).sort();;
//   console.log(glovesSort);
//   let count = 0;
//   for(let i = 0; i < glovesSort.length; i++) {
//     if(glovesSort[i] === glovesSort[i+1]) {
//       count++;
//       i++;
//     } 
//   }
//   console.log(count);
//   return count;
// }
// numberOfPairs(['red','red'])//,1])
// numberOfPairs(['red','green','blue'])//,0],)
// numberOfPairs(['gray','black','purple','purple','gray','black'])//,3])

// function sortByBit(arr) {
//   let res = arr.sort((a, b) => a.toString(2).split('1').length - b.toString(2).split('1').length || a - b);
//   console.log([1, 8, 3, 3, 5, 6, 9, 7]);
//   console.log(res);
//   return res;
// }
// sortByBit([3, 8, 3, 6, 5, 7, 9, 1])//[1, 8, 3, 3, 5, 6, 9, 7]





