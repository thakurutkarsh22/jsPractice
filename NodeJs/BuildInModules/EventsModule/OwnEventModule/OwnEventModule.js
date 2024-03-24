// If we want to create a class that follows Event module

const EventEmitter = require("node:events");

class BurgerShop extends EventEmitter {
  orderNumber;
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size, layers) {
    this.orderNumber++;

    this.emit("order", size, layers);
  }

  displayOrderNumber() {
    console.log(`Current Order Number: ${this.orderNumber}`);
  }
}

module.exports = BurgerShop;
