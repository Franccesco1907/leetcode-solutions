// First solution

// function addStrings(num1: string, num2: string): string {
//   let carry = 0;
//   let numbers: number[] = [];

//   for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {
//     const lastNum1 = i >= 0 ? Number(num1[i]) : 0;
//     const lastNum2 = j >= 0 ? Number(num2[j]) : 0;
//     let sum = lastNum1 + lastNum2 + carry;
//     carry = 0;
//     if (sum >= 10) {
//       sum -= 10;
//       carry = 1;
//     }

//     numbers.splice(0, 0, sum);
//   }

//   if (carry) numbers.splice(0, 0, 1);

//   return numbers.join('');
// };


// Second solution

// function addStrings(num1: string, num2: string): string {
//   let numbers: number[] = [];
//   let carry = 0;
//   let i = num1.length - 1;
//   let j = num2.length - 1;

//   while (i >= 0 || j >= 0 || carry > 0) {
//     const digit1 = i >= 0 ? Number(num1[i]) : 0;
//     const digit2 = j >= 0 ? Number(num2[j]) : 0;

//     const sum = digit1 + digit2 + carry;
//     numbers.push(sum % 10);

//     carry = Math.floor(sum / 10);
//     i--;
//     j--;
//   }

//   return numbers.reverse().join('');
// };


// Third solution

function addStrings(num1: string, num2: string): string {
  let result = '';
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? Number(num1[i]) : 0;
    const digit2 = j >= 0 ? Number(num2[j]) : 0;

    const sum = digit1 + digit2 + carry;

    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }

  return result;
};

console.log(addStrings('12345111', '91111129'));