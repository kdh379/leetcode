// Please solve it without the built-in Array.map method.

const map = function(arr: number[], fn: (num: number, index: number) => number): number[] {
    return Array.from(arr, (val, index) => fn(val, index));
};