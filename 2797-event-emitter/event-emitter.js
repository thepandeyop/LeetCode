class EventEmitter {
    constructor() {
        this.eventCallbacks = {};
    }

    subscribe(event, cb) {
        if (this.eventCallbacks[event]) {
            this.eventCallbacks[event].push(cb);
        } else {
            this.eventCallbacks[event] = [cb];
        }

        return {
            unsubscribe: () => {
                this.unsubscribe(event, cb);
            }
        };
    }

    unsubscribe(event, cb) {
        if (this.eventCallbacks[event]) {
            const index = this.eventCallbacks[event].indexOf(cb);
            if (index !== -1) {
                this.eventCallbacks[event].splice(index, 1);
            }
            if (this.eventCallbacks[event].length === 0) {
                delete this.eventCallbacks[event];
            }
        }
    }

    emit(event, args = []) {
        if (this.eventCallbacks[event]) {
            return this.eventCallbacks[event].map(cb => cb(...args));
        }
        return [];
    }
}

// // Example usage:
// const emitter = new EventEmitter();

// const callback1 = (data) => {
//     console.log("Callback 1:", data);
// };

// const callback2 = (data) => {
//     console.log("Callback 2:", data);
// };

// const subscription1 = emitter.subscribe("event1", callback1);
// const subscription2 = emitter.subscribe("event1", callback2);

// emitter.emit("event1", ["Hello"]);

// subscription1.unsubscribe();
// emitter.emit("event1", ["World"]);
