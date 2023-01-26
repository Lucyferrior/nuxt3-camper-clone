import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as middlewares from './middlewares';
import api from './routes';
import MessageResponse from './interfaces/MessageResponse';
import connect from './database/connect';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/api/v1', api);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
  connect()
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

