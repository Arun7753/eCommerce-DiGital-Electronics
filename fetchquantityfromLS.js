import { getCartProductFromLS } from "./getLocalStorage";

export const fetchquantityfromLS = (id, Price) => {
  let cartProducts = getCartProductFromLS();

  let existingProduct = cartProducts.find((currentProd) => currentProd.id === id); 
  let Quantity = 1;
//   console.log('Existing Product:', existingProduct);

  if (existingProduct) {
    Quantity = existingProduct.quantityNo;
    Price = existingProduct.price; 
  }


  return { Quantity, Price };
};
