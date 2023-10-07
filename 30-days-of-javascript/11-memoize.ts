type Fn = (...params: number[]) => number

function memoize(fn: Fn) {

    const cache: Record<string, number> = {};

    return (...params: number[]) => {

        const key = params.join('-');

        if ( key in cache ) // if ( cache[key] )는 falsy한 값을 확인함. 0일 때도 false로 인식한다.
            return cache[key];

        const result = fn(...params);
        cache[key] = result;

        return result;
    }
}


let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1 
