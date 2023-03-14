import { romanNumbers } from "./005_RomanToInteger";

export const intToRoman = (num: number): string => {
  console.log({ num });

  let romanNumber = "";

  const values: number[] = [
    1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000,
  ];
  const roman: string[] = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];


  for (let i = values.length - 1; i >= 0 && num > 0; i--) {
    while (num >= values[i]) {
      num -= values[i];
      romanNumber += roman[i];
    }
  }






  return romanNumber;
};
