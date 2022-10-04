import { gql } from '@apollo/client';

export const QUERY_MENU = gql`
    query getMenu {
        menu {
            _id
            menuText
            menuPrice
        }
    }
`;
