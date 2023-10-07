type Fn19<T> = () => Promise<T>

function promiseAll<T>(functions: Fn19<T>[]): Promise<T[]> {
    const promises = functions.map((fn) => fn());

    return Promise.all(promises);
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */