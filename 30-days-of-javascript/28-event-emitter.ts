type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

interface Events {
    [key: string]: Callback[];
}

class EventEmitter {

    private events: Events;

    constructor() {
        this.events = {};
    }
    
	subscribe(eventName: string, callback: Callback): Subscription {

        const listeners = this.events[eventName];
        if( !listeners ) this.events[eventName] = [];

        this.events[eventName].push(callback);
		
		return {
			unsubscribe: () => {
                const index = this.events[eventName].indexOf(callback);
                this.events[eventName].splice(index, 1);
			}
        };
	}

	emit(eventName: string, args: any[] = []): any[] {
        const listeners = this.events[eventName];
        if( !listeners ) return [];

        return listeners.map(listener => listener(...args));
	}
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */