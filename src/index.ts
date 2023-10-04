import { ApolloServer } from "apollo-server";
import { schema} from "./schema";
import {ormConfig} from "./ormconfig";
import { DataSource } from "typeorm";

const fastify = require('fastify')({
    logger: true
  })

const boot =async () => {

  const dataSource:DataSource = new DataSource(ormConfig)
  await dataSource.initialize();
   console.log("db connected")

    const server = new ApolloServer({
        schema,
        //context: ormConfig,
    })
    

    server.listen({ port: 5000,host: '127.0.0.1' }, function (err:any, address:any) {
        if (err) {
          fastify.log.error(err)
          process.exit(1)
        }
        fastify.log.info(`SERVE ON ${address}`)
        // Server is listening
        console.log('server is listening on the port',5000)
      })
}
boot();