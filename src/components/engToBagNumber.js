const numbers = {
  1: "১",
  2: "২",
  3: "৩",
  4: "৪",
  5: "৫",
  6: "৬",
  6: "৬",
  7: "৭",
  8: "৮",
  9: "৯"
};
export default function replaceNumbers(input) {
  let output = [];
  for (let i = 0; i < input.length; ++i) {
    if (numbers.hasOwnProperty(input[i])) {
      output.push(numbers[input[i]]);
    } else {
      output.push(input[i]);
    }
  }
  return output.join("");
}
