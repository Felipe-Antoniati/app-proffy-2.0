import express from 'express';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { errors } from 'celebrate'

const PORT = process.env.PORT ||5000;

const app = express();

app
  .use(cors())
  .use(helmet())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(routes)
  .use(cookieParser())
  .use(errors())
;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(
    `Server Started: http://localhost:${PORT}`
  );
});