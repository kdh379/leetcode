// Please solve it without the built-in Array.flat method.

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {

    const result: MultiDimensionalArray = [];

    const helper = (arr: MultiDimensionalArray, depth: number) => {
        arr.forEach((item) => {
            if (Array.isArray(item) && depth > 0) {
                helper(item, depth - 1);
            } else {
                result.push(item);
            }
        });

        return result;
    };

    return helper(arr, n);
};

/**
 * Runtime
 * 100ms
 * Beats 80.00%of users with TypeScript
 * 
 * Memory
 * 61.20MB
 * Beats 97.74%of users with TypeScript
 */