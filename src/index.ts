/////=================== 001_isBeautifulString.ts ===========================
// import { isBeautifulString2 } from "./algorithms-js-ts/001_isBeautifulString";
// const inputString = "bbbaacdafe";
// const inputString2 = "aabbb";
// const inputString3 = "bbc";
// const inputString4 = "deg";
// console.log(isBeautifulString2(inputString3));


/////=================== 002_mergeTwoList.ts ===========================
// import { ListNode, mergeTwoList } from "./algorithms-js-ts/002_mergeTwoList";

// //l1 = [1,2,4];
// //l2 = [1,3,4]

// let l1 = new ListNode(1);
// let l1_2 = new ListNode(2);
// l1.next = l1_2;
// let l1_3 = new ListNode(4);
// l1_2.next = l1_3;
// l1_3.next = null;

// let l2 = new ListNode(1);
// let l2_2 = new ListNode(3);
// l2.next = l2_2;
// let l2_3 = new ListNode(4);
// l2_2.next = l2_3;
// l2_3.next = null;

// console.log(mergeTwoList(l1, l2));

/////=================== 003_longestCommonPrefix.ts ===========================
// import { longestCommonPrefix } from "./algorithms-js-ts/003_longestCommonPrefix";

// const vector1 = ["flower", "flow", "flight"];//fl, funciona
// const vector2 = ["dog","racecar","car"];//"", funciona
// const vector3 = ["a"];//a, funciona
// const vector4 = ["cir","car"];//c, funciona
// const vector5 = ["aa","ab"]; //a, funciona
// const vector6 = ["aaa","aa","aaa"];//aa,  funciona
// const vector7 = ["aaa"];//aaa,

// console.log(longestCommonPrefix(vector7));

// ///=================== 004_3Sum.ts ===========================
// import { threeSum } from "./algorithms-js-ts/004_3Sum";

// const nums: number[] = [-4, -1, -1, 0, 1, 2];

// console.log(threeSum(nums));

// ///=================== 005_romanToInteger.ts ===========================
// import { romanToInteger } from "./algorithms-js-ts/005_RomanToInteger";

// const romanNumber1 = "III"; //3
// const romanNumber2 = "LVIII"; //58
// const romanNumber3 = "MCMXCIV"; //1994
// const romanNumber4 = "IX"; //4

// console.log(romanToInteger(romanNumber3));

// ===================== 006_intToRoman.ts ===========================
// import { intToRoman } from "./algorithms-js-ts/006_intToRoman";
// const num1 = 1994;//MCMXCIV
// const num2 = 3600;//MMMDC
// const num3 = 400;//IV
// const num4 = 900;//IX
// const num5 = 10;//XIX
// const num6 = 1994;//"MCMXC IV"
// const num7 = 10;
// const num8 = 4;
// const num9 = 6;

// console.log(intToRoman(num1));


// ===================== 007_two_sum.ts ===========================
import { twoSum } from "./algorithms-js-ts/007_two_sum";

const nums: number[] = [2,7,11,15];
const target:number = 9; 

console.log(twoSum(nums,target));