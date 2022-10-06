import { gql } from '@apollo/client';

export const UPDATE_ORDER = gql`
mutation UpdateOrder($updateOrderId: ID!, $value: Boolean) {
    updateOrder(id: $updateOrderId, value: $value) {
      _id
      menuText
      menuPrice
      restaurantName
    }
  }
`;

export const ADD_MENU = gql`
mutation AddMenu($menuText: String!, $menuPrice: Int!) {
  addMenu(menuText: $menuText, menuPrice: $menuPrice) {
    _id
    menuText
    menuPrice
  }
}
`;

export const REMOVE_MENU = gql`
mutation RemoveMenu($removeMenuId: ID!) {
  removeMenu(id: $removeMenuId) {
    _id
    menuText
    menuPrice
  }
}
`;