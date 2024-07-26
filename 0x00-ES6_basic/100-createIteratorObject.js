export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flat();

  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < employees.length) {
            return { value: employees[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
}

