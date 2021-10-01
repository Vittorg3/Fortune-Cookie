import express, { application } from 'express';
const server = express();

import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
server.use(cors());

server.use(express.json());
server.use(express.urlencoded({extended: true}));

import { route } from './routes/phraseRoute';
server.use('/', route);

import swaggerUI from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

server.listen(process.env.PORT, () => console.log('server online'));
