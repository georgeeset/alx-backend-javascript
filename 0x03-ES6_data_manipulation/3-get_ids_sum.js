export default function getStudentIdsSum(arrayData) {
  if (Array.isArray(arrayData) === false) {
    return [];
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue.id;
  return arrayData.reduce(reducer, 0);
}
