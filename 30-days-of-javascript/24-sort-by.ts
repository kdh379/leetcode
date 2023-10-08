type Fn24 = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn24): JSONValue[] {
    // if (arr.length <= 1) return arr;

    // const pivot = arr[0];
    // const left: JSONValue[] = [];
    // const right: JSONValue = [];

    // arr.forEach((value, index) => {
    //     if( index === 0 ) return;
    //     if (fn(value) < fn(pivot)) left.push(value);
    //     else right.push(value);
    // });

    // return [...sortBy(left, fn), pivot, ...sortBy(right, fn)];

    return arr.sort((a, b) => fn(a) - fn(b));
};