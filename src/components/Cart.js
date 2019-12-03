import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  render() {
    const { listOfAddedItems } = this.props;

    return (
      <div className="cart-container">
        <h1>Cart</h1>
        <div className="cart-list">
          {listOfAddedItems.map(item => (
            <>
              <p>{item.title}</p>
              <p>{item.desc}</p>
              <p>{`Quantity: ${item.quantity}`}</p>
            </>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listOfAddedItems: state.itemsAddedToCart
});

export default connect(mapStateToProps)(Cart);
