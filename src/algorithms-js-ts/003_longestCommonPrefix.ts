export const longestCommonPrefix = (vector: string[]): string => {
  let longestCommonPrefix: string = "";

  if (vector.length === 0) return longestCommonPrefix;

  let index = 0;
  for (const c of [...vector[0]]) {
    for (let i = 1; i < vector.length; i++) {
      if (index >= vector[i].length || c != vector[i].charAt(index)) {
        return longestCommonPrefix;
      }
    }
    longestCommonPrefix += c;
    index++;
  }

  return longestCommonPrefix;
};

/*
Write a function to find the longest common prefix string
amongst an array of strings.If there is no common prefix, 
return an empty string "".
*/
