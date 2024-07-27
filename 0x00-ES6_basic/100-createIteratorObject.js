export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flat();

  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < employees.length) {
            const result = { value: employees[index], done: false };
            index += 1;
            return result;
          }
          return { done: true };
        },
      };
    },
  };
}
