import { Client, Account } from 'appwrite'

const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('66478024001ed1e243ca')

export const account = new Account(client)
export default client