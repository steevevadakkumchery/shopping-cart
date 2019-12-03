import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(itemId) {
    this.props.addItemToCart(itemId);
  }

  render() {
    const { listItems, addItemToCart } = this.props;

    return (
      <div>
        <h1>Home</h1>
        <div className="item-list">
          {listItems.map(item => {
            return (
              <div className="item" key={item.id}>
                <img className="item-image" src={item.img}></img>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <p>{`Price: £${item.price}`}</p>
                <button
                  onClick={() => {
                    this.handleClick(item.id);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listItems: state.itemList
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: productId => {
    dispatch(addToCart(productId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
