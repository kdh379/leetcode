// Please solve it without using the built-in Array.reduce method.

const reduce = (nums: number[], fn: (acc: number, curr: number) => number, init: number): number => {
    let acc = init;
    nums.forEach( (n) => acc = fn(acc, n));
    return acc;
}