export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const taskInner = true;  // New variables to avoid redeclaration and unused variable errors
    const task2Inner = false;
  }

  return [task, task2];
}
