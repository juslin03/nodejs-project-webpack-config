import express from 'express';
import middlewaresConfig from './config/middlewares';
import apiRoutes from './modules';

const app = express();

middlewaresConfig(app);

app.get('/', (req, res, next) => {
    res.status(200).json({ message: 'Hello word from api' });
    next();
})

apiRoutes(app);
export default app;
