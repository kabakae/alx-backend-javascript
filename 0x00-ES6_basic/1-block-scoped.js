export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Do not redeclare variables; use let or const to avoid block scoping issues.
    const taskInside = true;
    const task2Inside = false;
    // These variables are intentionally not used to demonstrate block scoping
    console.log(taskInside, task2Inside);
  }

  return [task, task2];
}
