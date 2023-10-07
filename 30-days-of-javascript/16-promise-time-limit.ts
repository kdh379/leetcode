type Fn16 = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn16, t: number): Fn16 {
    
	return (...params: any[]) => 
        new Promise((resolve, reject) => {
            const id = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...params)
                .then((result) => resolve(result))
                .catch((err) => reject(err))
                .finally(() => clearTimeout(id));
        });
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */