import { faker } from "@faker-js/faker";

const cartText = `<div>You have ${faker.random.numeric()} items in your cart</div>`;

document.querySelector("#dev-cart")!.innerHTML = cartText;
console.log("Cart mfe");
