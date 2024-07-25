import { getCartProductFromLS } from "./getLocalStorage";

export const IncrementDecrement = (event, id, stock, price) => {
    const currentCardElement = document.querySelector(`#Card${id}`);
    const StockNo = currentCardElement.querySelector("#stockNo");
    const productPrice = currentCardElement.querySelector("#product-Price");

    let Quantity = 1;
    let localStoragePrice = 0;

    let localStorageProducts = getCartProductFromLS();
    let existingProduct = cartProducts.find((currentProd) => currentProd.id === id);

    if (existingProduct) {
        Quantity = existingProduct.quantityNo;
        localStoragePrice = existingProduct.price;
    } else {
        localStoragePrice = price;
        price = price;
    }

    if (event.target.id === "increment") {
        if (Quantity < stock) {
            Quantity += 1;
        } else if (Quantity === stock) {
            Quantity = stock;
            localStoragePrice = price * price;
        }
    }

    if (event.target.id === "decrement") {
        if (Quantity > 1) {
            Quantity -= 1;
        }
    }

    localStoragePrice = price * Quantity;


    let updatedCart = { id, Quantity, price: localStoragePrice };

    updatedCart = localStorageProducts.map((cartProd) => {
        return cartProd.id === id ? updatedCart : cartProd;
    })

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart))

    StockNo.innerText = Quantity;
    productPrice.innerText = localStoragePrice;
}