const createCounter = function(n: number) {
    let count = n;
    return () => count++;
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */