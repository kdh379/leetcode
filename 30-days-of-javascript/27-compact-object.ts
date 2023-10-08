// TODO : 능지 이슈로 인한 any 타입 사용... 뭘 넣어야 하지?..
type Obj27 = Record<string, any>;

function compactObject(obj: Obj27): Obj27 | undefined {
    if ( !obj ) return;
    if ( Array.isArray(obj) ) return obj.filter( Boolean ).map( compactObject );
    if ( typeof obj !== "object" ) return obj;
    
    const result: Obj = {};
    for (const key in obj) {
        const value = compactObject(obj[key]);
        if ( value ) result[key] = value;
    }
    
    return result;
};

/**Example 3:

Input: obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed. */

const obj3: Obj = [null, 0, 5, [0], [false, 16]];

console.log(compactObject(obj3)); // [5, [], [16]]