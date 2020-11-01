const _items = new WeakMap();

class Stack {

    get count() {
        return _items.get(this).length;
    }

    constructor() {
        _items.set(this,[]);
        
    }

    peek() {
        if(_items.get(this).length === 0)
            throw new Error('stack empty');
        return _items.get(this)[_items.get(this).length-1];
    }

    pop() {
        if(_items.get(this).length === 0)
            throw new Error('empty stack');

        return _items.get(this).pop();    
    }

    push(obj) {
        _items.get(this).push(obj);
    }
}

const s = new Stack();
