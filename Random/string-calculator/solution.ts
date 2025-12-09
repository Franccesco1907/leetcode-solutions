function stringCalculator(s: string): number {
  let result = 0;
  let currentNumber = 0;
  let sign = 1; // 1 (+) | -1 (-)

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '+' || char === '-') {
      result += sign * currentNumber;
      currentNumber = 0;
      sign = char === '+' ? 1 : -1;
    } else {
      currentNumber = currentNumber * 10 + Number(char);
    }
  }

  return result + sign * currentNumber; // Last number
}


console.log(stringCalculator('-123+234+45'));
