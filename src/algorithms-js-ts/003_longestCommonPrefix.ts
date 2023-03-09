export const longestCommonPrefix = (vector: string[]): string => {
  if (vector.length === 0) return "";

  let longestCommonPrefix = "";
  let exists = false;

  if (vector.length === 1 && [...vector[0]].length === 1) {
    longestCommonPrefix = vector[0].charAt(0);
  }

  [...vector[0]].map((currentLetter, index1) => {
    exists = false;
    for (let index = 1; index < vector.length; index++) {
      if (currentLetter === vector[index].charAt(index1)) {
        exists = true;
      } else {
        console.log("else ", longestCommonPrefix);
        exists = false;
        return longestCommonPrefix;
      }
    } //end of for

    if (exists) {
      longestCommonPrefix += currentLetter;
    } else {
      return longestCommonPrefix;
    }
  }); //end of map

  return longestCommonPrefix;
};

export const longestCommonPrefix2 = (vector: string[]): string => {
  if (vector.length === 0) return "";
  let longestCommonPrefix = "";

  if (vector.length === 1 && [...vector[0]].length === 1) {
    longestCommonPrefix = vector[0].charAt(0);
  }

  const tracker = new Map<string, boolean>();

  [...vector[0]].map((currentLetter, index1) => {
    for (let index = 1; index < vector.length; index++) {

      if (currentLetter === vector[index].charAt(index1)) {
        tracker.set(currentLetter, true);
      } else {
        tracker.set(currentLetter, false);
      }
    }
  });

  console.log(tracker)

  for (let index = 0; index < [...vector[0]].length; index++) {

    if (tracker.get(vector[0].charAt(index))) {
        longestCommonPrefix += vector[0].charAt(index);
    }
    else{
        return longestCommonPrefix;
    } 
  }

  return longestCommonPrefix;
};

/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/
