import { gql } from '@apollo/client';

export const QUERY_MENU = gql`
query Menus {
  menus {
    _id
    menuText
    menuPrice
    restaurantName
    isOrdered
  }
}
`;


