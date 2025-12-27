export default async function globalTeardown() {
    await globalTeardown.__MONGOINSTANCE.stop()
}