export default function taskBlock(trueOrFalse) {
  let task = false; // Changed to let to match outer scope variable
  let task2 = true; // Changed to let to match outer scope variable

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
