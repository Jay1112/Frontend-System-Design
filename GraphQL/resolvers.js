import { stocks, users, holdings } from './data.js'

export const resolvers = {
    Query: {
        stocks: () => {
            return stocks;
        },
        users: () => {
            return users;
        },
        holdings: () => {
            return holdings.map((h) => {
                const stockIndex = stocks.findIndex((s) => s.id == h.stockId);
                const userIndex = users.findIndex((u) => u.id == h.userId);

                delete h.stockId;
                delete h.userId;

                return {
                    ...h,
                    stock: stocks[stockIndex],
                    user: users[userIndex]
                }
            })
        }
    },
    Mutation: {
        addHolding: (_, {stockId, quantity, price, userId}) => {
            const newHolding = {
                id: Date.now(),
                quantity,
                avgPrice: price
            }

            holdings.push({
                ...newHolding,
                stockId: stockId,
                userId: userId
            });

            return {
                ...newHolding,
                stock: stocks[stockId],
                user: users[userId]
            }
        }
    }
};