const BurgerShop = require("./OwnEventModule");

const burgerShop = new BurgerShop();

burgerShop.on("order", (size, layers) => {
  console.log("ORDER RECIEVED: with ", size, " and ", layers);
});

burgerShop.order("Medium", 2);
