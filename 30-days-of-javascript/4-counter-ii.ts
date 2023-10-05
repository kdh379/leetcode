const createCounter2 = function(init: number) {
    let count = init;
    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => count = init
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */