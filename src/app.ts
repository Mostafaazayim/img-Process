import express, { Request, Response } from 'express'
import routes from './route/index.js'

const app = express()
const port = 5000

app.use(routes)

app.listen(port, () => {
    console.log(`server is runing on port ${port}`)
})
app.get('/', (req: Request, res: Response) => {
    console.log('hi')

    res.send('Hello World!')
})

export default app
