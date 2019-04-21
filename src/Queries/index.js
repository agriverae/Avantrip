import gql from "graphql-tag";

export const CARDS_QUERY = gql`
    query consultarCarts($stayId: String){
        allCards(filter: {stayId: $stayId}) {
        description
        id
        imgUrl
        link
        price
        stayId
        }
    }
`;

export const STAYS_QUERY = gql`
    query {
        allStayDatas(first: 5) {
        bestPrice,
        customId,
        id,
        label
        }
    }
`;