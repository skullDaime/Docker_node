const {ApolloServer, gql} = require("apollo-server");

const typeDefs = gql`
    type Query{
        getAllUsers: [user]
    }

    type user{
        id: ID!
        name: String
        function: String
    }
`;


const server = new ApolloServer({
    typeDefs,
    mocks: true,
});

server.listen(4000).then((url)=>{
    console.log(`Servidor rodando em ${url.url}`);
});