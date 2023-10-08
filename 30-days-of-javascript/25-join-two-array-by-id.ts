type JSONValue25 = {
    id: number;
} & Record<string, JSONValue>;

function join(arr1: JSONValue25[], arr2: JSONValue25[]): JSONValue[] {
    const result: {[key: string]: JSONValue25 } = {};

    arr1.forEach(item => result[item.id] = item);

    for (const item of arr2) {
        const id = item.id;
        if( result[id] ) 
        for( const key in item )
                result[item.id][key] = item[key];
        else    
            result[id] = item;
    }

    return Object.values(result);
};

/**
 * Input: 
arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
], 
arr2 = [
    {"id": 3, "x": 5}
]
Output: 
[
    {"id": 1, "x": 1},
    {"id": 2, "x": 9},
    {"id": 3, "x": 5}
]
 */

const arr1: JSONValue25[] = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
];

const arr2: JSONValue25[] = [
    {"id": 3, "x": 5}
];

console.log(join(arr1, arr2)); // [{"id":1,"x":1},{"id":2,"x":9},{"id":3,"x":5}]