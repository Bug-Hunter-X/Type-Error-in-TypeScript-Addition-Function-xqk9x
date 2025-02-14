function add(a: number, b: number): number {
  return a + b;
}

function add(a: string, b: string): string {
  return a + b;
}

let result1 = add(10, 20); // Correct: numbers
let result2 = add("hello", "world"); // Correct: strings

//Type Guard
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addTypeGuard(a: any, b: any): number | string {
  if(isNumber(a) && isNumber(b)) {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else {
    return "Invalid input";
  }
}
let result3 = addTypeGuard(10,20);
let result4 = addTypeGuard("hello", "world");
let result5 = addTypeGuard(10,"world");