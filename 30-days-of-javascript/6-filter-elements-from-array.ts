// Please solve it without the built-in Array.filter method.

const filter = (arr: number[], fn: (n: number, i: number) => boolean): number[] => 
    arr.reduce<number[]>((filteredArr, n, i) => {
        fn(n, i) && filteredArr.push(n);
        return filteredArr;
    }, []);