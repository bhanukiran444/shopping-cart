import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollctions = createSelector(
  [selectShop],
  shop => shop.collections
);
