import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';

import { toggleCartToggle } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartToggle }) => (
  <div className="cart-icon" onClick={toggleCartToggle}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartToggle: () => dispatch(toggleCartToggle())
});

export default connect(null, mapDispatchToProps)(CartIcon);
