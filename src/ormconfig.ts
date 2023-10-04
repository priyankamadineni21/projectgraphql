/*import { DataSource } from "typeorm";
import dotenv from 'dotenv'
dotenv.config()

export default new DataSource({
    type: "postgres",
    url: process.env.CONNECTION_STRING,
    //entities:[Product,User],
    entities: [__dirname+"/entities/*.ts"],
    synchronize:false,
    logging:false,
    migrations:[__dirname+"/migration/*.ts"],
    subscribers:[],
})
*/
import {DataSourceOptions} from "typeorm"
import dotenv from 'dotenv'
dotenv.config()
console.log(__dirname);

export const ormConfig:DataSourceOptions = {
  type: "postgres",
  url: process.env.CONNECTION_STRING,
  entities: [__dirname+"/entities/*.ts"],
  synchronize: false,
  logging:false,
  migrations:[__dirname+"/migration/*.ts"],
  subscribers:[],
}