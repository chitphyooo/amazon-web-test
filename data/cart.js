export const cart = [];

export function addToCart(productId) {
  let matchingItem;
  let selectorValue = document.querySelector(`.js-quantity-selector-${productId}`).value;
  let selectorValueNum = Number(selectorValue);

        cart.forEach((cartItem) => {
            if(productId === cartItem.productId) {
                matchingItem = cartItem;
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