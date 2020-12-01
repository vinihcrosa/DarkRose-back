import express from 'express';
import morgan from 'morgan';

const app = express();

import './database/connection';
import routes from './routes/routes';

app.use(express.json());
app.use(morgan('tiny'));

app.use(routes);

app.get('/', (req: any, res) => {
    return res.json({ return: true });
});

app.listen(3333, () => {
    console.log('Running on port 3333')
})