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
