import Item1 from '../assets/image1.png';

const initialState = {
  itemList: [
    {
      id: 1,
      title: 'Winter body',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 110,
      img: Item1
    },
    {
      id: 2,
      title: 'Adidas',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 80,
      img: Item1
    },
    {
      id: 3,
      title: 'Vans',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 120,
      img: Item1
    },
    {
      id: 4,
      title: 'White',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 260,
      img: Item1
    },
    {
      id: 5,
      title: 'Cropped-sho',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 160,
      img: Item1
    },
    {
      id: 6,
      title: 'Blues',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 90,
      img: Item1
    }
  ],
  itemsAddedToCart: [],
  totalPrice: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART': {
      let addedItem = state.itemList.find(item => item.id === action.itemId);
      let itemAlreadyExistingInCart = state.itemsAddedToCart.find(
        existingItem => existingItem.id === action.itemId
      );

      if (itemAlreadyExistingInCart) {
        itemAlreadyExistingInCart.quantity++;

        return {
          ...state,
          totalPrice: state.totalPrice + addedItem.price
        };
      } else {
        let itemToAdd = { ...addedItem };
        itemToAdd.quantity = 1;

        return {
          ...state,
          itemsAddedToCart: [...state.itemsAddedToCart, itemToAdd],
          totalPrice: state.totalPrice + addedItem.price
        };
      }
    }
    case 'REMOVE_ITEM_FROM_CART': {
      let itemToBeRemoved = state.itemsAddedToCart.find(
        item => item.id === action.itemId
      );
      let itemAlreadyExistingInCart = state.itemsAddedToCart.filter(
        existingItem => existingItem.id !== action.itemId
      );

      return {
        ...state,
        itemsAddedToCart: itemAlreadyExistingInCart,
        totalPrice:
          state.totalPrice - itemToBeRemoved.price * itemToBeRemoved.quantity
      };
    }
  }

  return state;
};

export default cartReducer;
