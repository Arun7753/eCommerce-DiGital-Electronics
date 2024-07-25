import { updatedCartvalue } from "./updatedCartvalue";

export const getCartProductFromLS = () => {
    let cartProducts = localStorage.getItem("cartProductLS");
    if(!cartProducts){
        return[];
    }
    cartProducts = JSON.parse(cartProducts);

    updatedCartvalue(cartProducts);

    return cartProducts;
}