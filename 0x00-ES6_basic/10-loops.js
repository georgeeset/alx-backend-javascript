export default function appendToEachArrayValue(array, appendString) {
  let value = [];
  for (const idx of array) {
    value.push(appendString + idx);
  }

  return value;
}
