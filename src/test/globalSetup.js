import {MongoMemoryServer} from "mongodb-memory-server";

export default asynck function globalSetup() {
    const instance = await MongoMemoryServer.create({
        binary: {
            version: "8.2.3",
        },
    })

    global.__MONGOINSTANCE = instance
    process.env.DATABASE_URL = instance.getUri()
}