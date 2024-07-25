import { getCartProductFromLS } from "./getLocalStorage";
import { updatedCartvalue } from "./updatedCartvalue";

export const addTocartButton = (e, id, stock) => {

    let cartProducts = getCartProductFromLS();

    let Product = document.querySelector(`#MCard${id}`);
    let quantityNo = Product.querySelector("#stockNo").innerText;
    let price = Product.querySelector("#product-Price").innerText;

    price = price.replace('₹', '')

    let existingProduct = cartProducts.find((cartProd) => cartProd.id === id);

    if (existingProduct && quantityNo > 1) {
        quantityNo = Number(existingProduct.quantityNo) + Number(quantityNo);
        price = Number(price * quantityNo);

        let updatedCart = { id, quantityNo, price };

        updatedCart = cartProducts.map((cartProd) => {
            return cartProd.id === id ? updatedCart : cartProd;
        })
        
        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart))
    }

    if (existingProduct) {
        console.log("Product already in cart:", existingProduct);
        return false;
    }

    price = parseFloat(price) * parseInt(quantityNo);
    console.log("Quantity:", quantityNo, "Price:", price);

    let updatedCart = { id, quantityNo, price }
    cartProducts.push(updatedCart);
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts))

    updatedCartvalue(cartProducts);

} 