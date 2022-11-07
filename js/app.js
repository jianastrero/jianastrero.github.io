console.log("hello world")

import PocketBase from './pocketbase/pocketbase.es.mjs'

const client = new PocketBase('https://jianastrero-api.herokuapp.com')

// alternatively you can also fetch all records at once via getFullList:
const records = await client.records.getFullList('bio', {sort: '-created',})

console.log("records", records)