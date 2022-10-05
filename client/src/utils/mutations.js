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