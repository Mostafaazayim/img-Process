import { Router } from 'express';
import picRouter from './api/pictures.js';
import path from 'path';
const routes = Router();
routes.use('/pictures', picRouter);
routes.get('/', (req, res) => {
    res.send(path.resolve('./'));
});
export default routes;
