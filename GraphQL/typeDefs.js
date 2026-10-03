export const typeDefs = `#graphql
    type Stock {
        id: ID
        name: String
        price: Int
        code: String
    }
    
    type User {
        id: ID
        name: String
    }

    type Holding {
        id: ID
        quantity: Int
        avgPrice: Int
        stock: Stock
        user: User
    }

    type Query {
        stocks: [Stock]
        users: [User]
        holdings: [Holding]
    }

    type Mutation {
        addHolding(stockId: String, quantity: String, price: Int, userId: String): Holding
    }
`;