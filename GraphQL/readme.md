## GraphQL Client Queries

query StockQuery {
  stocks {
    name
    price
  }
}


query UsersQuery {
  users {
    name
  }
}

query HoldingQueryQuery {
  holdings {
    id
    quantity
    avgPrice
    stock {
      name
      price
    }
    user {
      name
    }
  }
}
