//HashMap Version
export const isBeautifulString2 = (inputString: string): boolean => {
  console.log(inputString);

  //Function getHashMapInputString create a hashMap from the inputString variable
  const getHashMapInputString = (inputString: string): Map<string, number> => {
    const hm: Map<string, number> = new Map<string, number>();
    [...inputString].map((currentLetter) => {
      hm.get(currentLetter)
        ? hm.set(currentLetter, (hm.get(currentLetter) || 0) + 1)
        : hm.set(currentLetter, 1);
    });
    return hm;
  };

  //Creation of
  const tracker: Map<string, number> = new Map<string, number>(
    getHashMapInputString(inputString)
  );

  //Creation of variables
  const alphaFirst: number = "a".charCodeAt(0);
  const alphaLast: number = "z".charCodeAt(0);
  let previousCount: number = Number.MAX_VALUE;

  console.log(tracker);
  for (let index = alphaFirst; index <= alphaLast; index++) {
    const currentCount = tracker.get(String.fromCharCode(index)) || 0;
    if (previousCount < currentCount) return false;
    previousCount = currentCount;
  }

  return true;
};

//My own Version
export const isBeautifulString = (inputString: string): boolean => {
  const startTime = performance.now();

  //pass a lower case
  const inputStringLC = inputString.toLowerCase();

  //make it an array
  let inputStringArray: string[] = [...inputStringLC];

  //order the array
  inputStringArray.sort();

  //create array of alphabet
  const alphabet: string[] = [...Array(26)].map((_, i) =>
    String.fromCharCode(i + 97)
  );

  //Do while cycle to introduce an empty space when there is no a previous character
  let index = 0;
  do {
    if (alphabet[index] < inputStringArray[index]) {
      inputStringArray.splice(index, 0, "");
    }
    index++;
  } while (index !== inputStringArray.length);

  //print the actual modify array
  console.log(inputStringArray);

  //check out if is there a empty character
  for (let index = 0; index < inputStringArray.length; index++) {
    if (inputStringArray[index] === "") {
      return false;
    }
  }

  //variables declarations:
  let results: number[] = []; //it will contain the total amount of each letter
  let currentCount: number = 1;
  let previousLetter: string = "";
  let currentLetter: string = "";
  let nextLetter: string = "";

  //Cycle to fill the array of results, that contains the total amount of each letter
  for (let index = 0; index < inputStringArray.length; index++) {
    //set currentLetter with the current value of the iteration
    currentLetter = inputStringArray[index];
    //reset of variables
    previousLetter = "";
    nextLetter = "";

    if (index > 0) {
      previousLetter = inputStringArray[index - 1];
    }

    if (index <= inputStringArray.length - 2) {
      nextLetter = inputStringArray[index + 1];
    }

    if (previousLetter === currentLetter) {
      currentCount++;
    }

    if (currentLetter !== nextLetter && index > 0) {
      results.push(currentCount);
      currentCount = 1;
    }
  } //end for

  console.log(results);

  //Cycle to check
  for (let index = 0; index < results.length; index++) {
    if (index > 0) {
      if (results[index - 1] < results[index]) {
        return false;
      }
    }
  }

  const endTime = performance.now();
  //console.log(`It took ${endTime - startTime} milliseconds`);
  return true;
};

/*
A string is said to be beautiful if each letter in the string appears at most as many times
as the previous letter in the alphabet within the string; 
ie: b occurs no more times than a; c occurs no more times than b; etc.
 Note that letter a has no previous letter. Given a string, check whether it is beautiful.
*/

/*
Example
• For inputString - "bbbaacdafe", the output should be solution (inputString) - true

This string contains 3 a's, 3 b's, 1 c , 1 d, 1 e , and 1 f (and 0 of every other letter),
so since there aren't any letters that appear more frequently than the previous letter, 
this string qualifies as beautiful.


• For inputstring = "aabbb" the output should be solution (inputString) = false 
Since there are more b's than a's, this string is not beautiful. 


• For inputString = "bbc", the output should be solution (inputString) = false 
Although there are more b's than c's, this string is not beautiful because there are no a's, 
so therefore there are more b's than a's.

*/