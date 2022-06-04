import { DataSource } from "typeorm";
import { User } from "./entities/User"
export const AppDataSource = new DataSource({
    type:"postgres",
    host: "localhost",
    username: "boburmirzo",
    password: "bekdev2605",
    port: 5432,
    database: "postgres",
    entities: [User],
    logging: true,
    synchronize: true
})