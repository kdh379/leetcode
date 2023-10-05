const expect = function(val: string) {
    return {
        toBe: ( expected: string ) => {
            if ( val !== expected ) throw new Error("Not Equal");
            return true;
        },
        notToBe: ( expected: string ) => {
            if ( val === expected ) throw new Error("Equal");
            return true;
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */