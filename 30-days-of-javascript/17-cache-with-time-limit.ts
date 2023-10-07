type CacheMap = {
    [key: number]: CacheEntry;
}

type CacheEntry = {
    value: number,
    timeout: ReturnType<typeof setTimeout>
}

class TimeLimitedCache {
    
    constructor() {
    }

    private cache: CacheMap = {};
    
    set(key: number, value: number, duration: number): boolean {
        const isCached = key in this.cache;

        if ( isCached ) clearTimeout(this.cache[key].timeout);

        this.cache[key] = {
            value,
            timeout: setTimeout(() => {
                delete this.cache[key];
            }, duration)
        }

        return isCached;
    }

    get(key: number): number {
        return this.cache[key]?.value || -1;
    }

    count(): number {
        return Object.keys(this.cache).length;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */