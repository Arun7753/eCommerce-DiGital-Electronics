const CartValue = document.querySelector("#value");

export const updatedCartvalue = (cartProducts) => {
   CartValue.innerHTML = `<p id="value" class="text-cyan-50">${cartProducts.length}</p>`;
};
