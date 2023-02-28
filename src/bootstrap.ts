import { faker } from "@faker-js/faker";

console.log("Cart mfe");

const mount = (el: Element) => {
	const cartText = `<div>You have ${faker.random.numeric(
		3
	)} items in your cart</div>`;
	el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
	const el = document.querySelector("#dev-cart");

	// Assuming our container doesnt have an element with dev-products ID
	if (el) {
		// We are probably running in isolation
		mount(el);
	}
}


export { mount };
