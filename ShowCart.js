import products from './api/products.json';
import { getCartProductFromLS } from "./getLocalStorage";
import { fetchquantityfromLS } from './fetchquantityfromLS';
import { IncrementDecrement } from './IncrementDecrement';
import { removeFromCart } from './removeFromCart';

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((currentProd) => {
    return cartProducts.some((currentElem) => currentElem.id === currentProd.id)
    // console.log(currentProd.id);
})

const templateContainer = document.querySelector("#ProductCart");
const Container = document.querySelector("#CartContainer");

const showcartProduct = () => {
    filterProducts.forEach((CartProd) => {
        const { id, name, category, Price, Quantity, image, stock, MRP } = CartProd;
        let productClone = document.importNode(templateContainer.content, true);

        const LSactualData = fetchquantityfromLS(id, Price);
        productClone.querySelector(".cardValue").setAttribute("id", `Mcard${id}`);
        productClone.querySelector("#name").textContent = name;
        productClone.querySelector("#MRP").textContent = MRP;
        productClone.querySelector("#image").src = image;
        productClone.querySelector("#Price").textContent = LSactualData.Price;
        productClone.querySelector("#Quantity").textContent = LSactualData.Quantity;
        

        productClone.querySelector("#QuantityProduct").addEventListener('click', (event) => {
            IncrementDecrement(event, id, stock, Price);
        });

        productClone.querySelector("#removeButton").addEventListener('click', () => removeFromCart(id));

        Container.appendChild(productClone);
    })
}

showcartProduct()
// console.log(filterProducts);