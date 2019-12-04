export const addToCart = itemId => ({
  type: 'ADD_ITEM_TO_CART',
  itemId
});

export const removeItemFromCart = itemId => ({
  type: 'REMOVE_ITEM_FROM_CART',
  itemId
});
