export const cart = [];

export function addToCart(productId) {
  let matchingItem;
  let selectorValue = document.querySelector(`.js-quantity-selector-${productId}`).value;
  let selectorValueNum = Number(selectorValue);

        cart.forEach((item) => {
            if(productId === item.productId) {
                matchingItem = item;
            }           
        });
        
         if(matchingItem) {
                matchingItem.quantity += selectorValueNum;
            } else {
                 cart.push({
                    productId: productId,
                    quantity: selectorValueNum
        });
            }          

};