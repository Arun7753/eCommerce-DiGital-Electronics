export const QuantityToggle = (e, id, stock) => {
    const currentCardElement = document.querySelector(`#MCard${id}`);
    // console.log(currentCardElement);
    const StockNo = currentCardElement.querySelector("#stockNo");
    // console.log(StockNo);

    let quantity = parseInt(StockNo.getAttribute("data-quantity")) || 1;

    if (e.target.id === "increment") {
        if (quantity < stock) {
            quantity += 1;
        } else if (quantity === stock) {
            quantity === stock;
        }
    }


    if (e.target.id === "decrement") {
        if (1 < quantity) {
            quantity -= 1;
        }
    }

    StockNo.innerText = quantity;
    StockNo.setAttribute("data-quantity", quantity.toString());
    return quantity;
};