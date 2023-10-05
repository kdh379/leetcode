const compose = (functions: Function[]) => {
    return (num: number) => {
        return functions.reduceRight((acc, fn) => fn(acc), num);
    }
}