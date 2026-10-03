import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js";

async function startServer(){
    const server = new ApolloServer({ typeDefs, resolvers });
    const PORT = process.env.PORT || 8081;

    const { url } = await startStandaloneServer(server,{
        listen: PORT
    });

    console.log(`Server is listining at ${url}`)
}

startServer();
