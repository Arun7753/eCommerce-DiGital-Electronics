import { getCartProductFromLS } from "./getLocalStorage";
import { updatedCartvalue } from "./updatedCartvalue";

export const removeFromCart = (id) => {
    let cartProducts = getCartProductFromLS();
cartProducts = cartProducts.filter((currentProd) => currentProd.id !== id)

localStorage.setItem("cartProductLS", JSON.stringify(cartProducts))

let removeDiv = document.getElementById(`card${id}`);
if (removeDiv) {
    removeDiv.remove();
}
updatedCartvalue(cartProducts);
};