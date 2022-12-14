import path from 'path'
import sharp from 'sharp'
//resize Image
const processImage = async (name: string, width: void, height: void) => {
    try {
        await sharp(path.resolve('./' + `/full/${name}.jpg`))
            .resize({ width: Number(width), height: Number(height) })
            .toFile(`process/${name}.${width}.${height}.jpg`)
            .then(() => {
                console.log('done....')
            })
    } catch (error) {
        return 'Image could not be processed.'
    }
}
export default processImage
