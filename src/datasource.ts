import {ormConfig} from "./ormconfig"
import {DataSource} from "typeorm"

const dataSource = (async () => {
    return new Promise((resolve, _reject) => {
        resolve(new DataSource(ormConfig))
    })
})()

export default dataSource
