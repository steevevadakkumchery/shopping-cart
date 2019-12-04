import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItemFromCart } from '../actions/cartActions';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleRemoveItem(id) {
    debugger;
    this.props.removeItem(id);
  }

  render() {
    const { listOfAddedItems, totalPrice } = this.props;
    const listToDisplay = listOfAddedItems.map(item => (
      <React.Fragment key={item.id}>
        <p>{item.title}</p>
        <p>{item.desc}</p>
        <p>Quantity: {item.quantity}</p>
        <button
          onClick={() => {
            debugger;
            this.handleRemoveItem(item.id);
          }}
        >
          Remove
        </button>
      </React.Fragment>
    ));

    return (
      <div className="cart-container">
        <h1>Cart</h1>
        <div className="cart-list">{listToDisplay}</div>
        <p>Total: {totalPrice}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listOfAddedItems: state.itemsAddedToCart,
  totalPrice: state.totalPrice
});

const mapDispatchToProps = dispatch => ({
  removeItem: id => {
    dispatch(removeItemFromCart(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
