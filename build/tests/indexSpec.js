import app from '../app.js';
import supertest from 'supertest';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await supertest(app).get('/');
        expect(response.status).toBe(200);
    });
    it('succeeds to write resized process file (existing file, valid size values)', async () => {
        let error = null;
        try {
            await sharp(path.resolve('./' + `/full/fjord.jpg`))
                .resize({ width: Number(100), height: Number(100) })
                .toFile(`process/fjord.100.100.jpg`)
                .then(() => {
                error = null;
            });
        }
        catch (e) {
            error = 'Image could not be processed.';
        }
        expect(error).toBeNull();
    });
});
describe('GET /pictures', () => {
    it('responds with 404 if called without parameters', () => {
        supertest(app).get('/pictures').expect(404);
    });
    it('responds with 404 if called with a missing parameter', () => {
        supertest(app).get('/pictures?name=fjord&height=100').expect(404);
    });
    it('responds with 404 if called correctly but image does not exist', () => {
        supertest(app)
            .get('/pictures?name=more&height=100&width=100')
            .expect(404);
    });
    it('responds with 200 if called correctly and image exist', () => {
        supertest(app)
            .get('/pictures?name=fjord&height=100&width=100')
            .expect(200);
    });
    it('created a thumb version of the image', () => {
        supertest(app)
            .get('/pictures?name=fjord&height=100&width=100')
            .then(() => {
            fs.stat(path.resolve(__dirname, '../../../assets/thumb/fjord-100x100.jpg')).then((fileStat) => expect(fileStat).not.toBeNull());
        });
    });
});
