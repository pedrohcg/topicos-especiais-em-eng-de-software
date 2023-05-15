import pkg from 'express';

import pavementRouter from './pavement.routes';

const {Router} = pkg;
const routes = Router();

routes.use('/pavement', pavementRouter)

export default routes;