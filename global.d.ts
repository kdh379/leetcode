export {};

declare global {
    interface Array<T> {
        last(): T | -1;
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }

    type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
    type Obj = Record<string, JSONValue> | JSONValue[]
}
