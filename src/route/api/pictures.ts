import { Router, Request, Response } from 'express'
import pictures from '../../util/DATA.js'
import path from 'path'
import { existsSync } from 'fs'

import processImage from './utilities.js'

const picRouter = Router()

picRouter.get('/', (req: Request, res: Response) => {
    const width = req.query.width as void
    const height = req.query.height as void
    const name = req.query.name as string
    const location = path.resolve('./' + `/full/${name}.jpg`)
    const picture = pictures.includes(name)
    const processLocation = path.resolve(
        './' + `/process/${name}.${width}.${height}.jpg`
    )

    //if
    if (name === undefined) {
        return res.status(404).send('The name  not defined')
    }
    if (picture === false) {
        return res.status(404).send('The picture not found .')
    }
    if (existsSync(location) === false) {
        return res
            .status(404)
            .send(
                'The requested resource could not be found but may be available again in the future. Subsequent requests by the client are permissible.'
            )
    }
    if (width === undefined || width <= 0 || isNaN(width)) {
        return res.status(404).send('The width lessthan 0 or undefined.')
    }
    if (height === undefined || height <= 0 || isNaN(height)) {
        return res.status(404).send('The height lessthan 0 or not defined.')
    }

    console.log(`width${width} X height${height}`)
    // check if pictureProcess in process folder
    if (existsSync(processLocation)) {
        console.log('The image already exists')
        return res.sendFile(processLocation)
    }

    //return process Image
    const g = async () => {
        await processImage(name, width, height).then(() => {
            res.sendFile(processLocation)
        })
    }
    g()
})

export default picRouter
