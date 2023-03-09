/*
/////=================== 001_isBeautifulString.ts ===========================
import { isBeautifulString,isBeautifulString2 } from "./algorithms-js-ts/001_isBeautifulString";
const inputString = "bbbaacdafe";
const inputString2 = "aabbb";
const inputString3 = "bbc";
const inputString4 = "deg";
console.log(isBeautifulString2(inputString3));
*/


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
//Input
import { longestCommonPrefix, longestCommonPrefix2 } from "./algorithms-js-ts/003_longestCommonPrefix";

const vector: string[] = ["flower", "flow", "flight"];
const vector2 = ["dog","racecar","car"];
const vector3 = ["a"];
const vector4 = ["cir","car"];
const vector5 = ["aa","ab"]; 
//Output: "fl"
console.log(longestCommonPrefix2(vector5));
