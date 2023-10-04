"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = require("./schema");
const fastify = require('fastify')({
    logger: true
});
const boot = () => {
    const server = new apollo_server_1.ApolloServer({
        schema: schema_1.schema,
    });
    server.listen({ port: 5000, host: '127.0.0.1' }, function (err, address) {
        if (err) {
            fastify.log.error(err);
            process.exit(1);
        }
        fastify.log.info(`SERVE ON ${address}`);
        console.log('server is listening on the port', 5000);
    });
};
boot();
//# sourceMappingURL=index.js.map