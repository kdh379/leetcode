type Obj21 = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj21[], size: number): Obj21[][] {
    const result: Obj21[][] = [];
    for (let i = 0; i < arr.length; i += size)
        result.push(arr.slice(i, i + size));
    
    return result;
};