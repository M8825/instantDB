import { init, tx, id } from '@instantdb/admin'

const db = init({
  appId: '4220e1b4-b2ba-48dd-9b71-05686b4c4c04',
  adminToken: '424fab63-11f2-4760-bec6-e68f2b6b99a3',
})


const data = await db.query({ books: {}, users: {} })
const { books, users } = data
