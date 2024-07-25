import { addTocartButton } from "./addTocartButton.js";
import { QuantityToggle } from "./QuantityToggle.js";

const productTemp = document.querySelector("#productTemp");
const productTempII = document.querySelector("#productTempII");
const productTempIII = document.querySelector("#productTempIII");
const productTempIV = document.querySelector("#productTempIV");


export const showproduct = (products) => {
    if (!products) {
        console.log("No products found");
        return false;
    }

    products.forEach((CardProd) => {
        const { id, name, category, Price, stock, image, description, MRP } = CardProd;

        const productClone = document.importNode(productTemp.content, true);


        productClone.querySelector("#product-name").textContent = name;
        productClone.querySelector("#product-IMG").src = image;
        productClone.querySelector("#product-Price").textContent = `₹${Price}`;
        productClone.querySelector("#product-MRP").textContent = `₹${MRP}`;
        productClone.querySelector("#available-quantity").textContent = stock;
        productClone.querySelector("#product-description").textContent = description;

        productClone.querySelector("#MobileCard").setAttribute("id", `MCard${id}`);


        if (category === "Mobile") {

            productClone.querySelector("#QuantityProduct").addEventListener('click', (e) => {
                QuantityToggle(e, id, stock);
            });

            productClone.querySelector("#addtocart").addEventListener('click', (e) => {
                addTocartButton(e, id, stock);
            });

            productTemp.append(productClone);


        } else if (category === "Television") {
            const productTeleClone = document.importNode(productTempII.content, true);
            productTeleClone.querySelector("#product-name").textContent = name;
            productTeleClone.querySelector("#product-IMG").src = image;
            productTeleClone.querySelector("#product-Price").textContent = `₹${Price}`;
            productTeleClone.querySelector("#product-MRP").textContent = `₹${MRP}`;
            productTeleClone.querySelector("#available-quantity").textContent = stock;
            productTeleClone.querySelector("#product-description").textContent = description;
            productTempII.append(productTeleClone);
        } else if (category === "Kitchen-Appliances") {
            const productKitchenClone = document.importNode(productTempIII.content, true);
            productKitchenClone.querySelector("#product-name").textContent = name;
            productKitchenClone.querySelector("#product-IMG").src = image;
            productKitchenClone.querySelector("#product-Price").textContent = `₹${Price}`;
            productKitchenClone.querySelector("#product-MRP").textContent = `₹${MRP}`;
            productKitchenClone.querySelector("#available-quantity").textContent = stock;
            productKitchenClone.querySelector("#product-description").textContent = description;
            productTempIII.append(productKitchenClone);
        } else if (category === "Air-Conditioners") {
            const productACClone = document.importNode(productTempIV.content, true);
            productACClone.querySelector("#product-name").textContent = name;
            productACClone.querySelector("#product-IMG").src = image;
            productACClone.querySelector("#product-Price").textContent = `₹${Price}`;
            productACClone.querySelector("#product-MRP").textContent = `₹${MRP}`;
            productACClone.querySelector("#available-quantity").textContent = stock;
            productACClone.querySelector("#product-description").textContent = description;
            productTempIV.append(productACClone);
        }

    });
};



