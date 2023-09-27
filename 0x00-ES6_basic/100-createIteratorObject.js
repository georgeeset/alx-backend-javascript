export default function createIteratorObject(report) {
  // apply async function to help push out each array item
  return (function* _() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }());
}
