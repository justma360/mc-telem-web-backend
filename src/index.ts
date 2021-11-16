import Console from './utils/pinoLogger';
import bodyParser from 'body-parser';
import Config from './Config';
import express from 'express';
import cors from 'cors';
import sampleRoute from './routes/sampleRoute';
import compression from 'compression';
import httpsRedirect from 'express-https-redirect';
import MqttMiddleware from './middlewares/mqtt';
import es6Renderer from 'express-es6-template-engine';

const app = express();
const { port } = Config;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', httpsRedirect());

/* ==== HTML Render ==== */
app.use(express.static('build'));
app.engine('html', es6Renderer);
app.set('views', 'html');
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index');
});

/* ==== Endpoints ==== */
app.get('/status', (req, res) => {
  res.json({ status: 'ok', version: process.env.npm_package_version });
});

app.use('/api/sample', sampleRoute);

/* ==== Server ==== */
app.listen(port, () => {
  Console.info(`Server listening on port ${port}`);

  MqttMiddleware.run();
});
