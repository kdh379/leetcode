const once = (fn: Function) => {
    let isCalled = false;
    return (...args: any[]) => {
        if(isCalled) return;
        
        isCalled = true;
        return fn(...args);
    }
}