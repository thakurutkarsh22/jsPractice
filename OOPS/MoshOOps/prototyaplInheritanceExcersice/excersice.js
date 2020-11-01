function HtmlElement() {
    this.property = 'abcd';
    this.click = function() {
        console.log('click');
    }
}

HtmlElement.prototype.render = function() {
    return 
}

HtmlElement.prototype.focus = function() {
    console.log('focus');
}

const htmEl = new HtmlElement();
console.log(htmEl.click());


// html select element 

function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function(x) {
        this.items.push(x);
        console.log('addItem');
    }

    this.removeItem = function(x) {
        this.items.removeItem(x);
        console.log('removeItem');
    }

    this.render = function() {
        return `
            <select>
                ${this.items.map(item => `
                    <option>${item} </option>
                ` ).join('')} 
            </select>
        `
    }//.join makes the , go away 
}

HtmlSelectElement.prototype = new HtmlElement(); //Tricky part   // Object.create(HtmlElement.prototype)
HtmlSelectElement.prototype.constructor = HtmlSelectElement; 


const htmlSelectEL = new HtmlSelectElement([1,2,3,4]);
console.log(htmlSelectEL);


/// polymorphism continue

function HtmlImageElement(link){
    this.src = link;

    this.render = function() {
        return `<img src="${this.src}"/>`
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.console = HtmlImageElement;


