const notifier = require('node-notifier');
const cors = require('cors');


// Init express application
const app = new (require('express'))();

// Init app vars
app.set('port', process.env.PORT || 3002);
app.set('host', process.env.SERVER_HOST || 'localhost');
app.set('frontHost', process.env.FRONT_HOST || 'localhost:8080');

// Init express middlewares
app.use(cors({credentials: true, origin: app.get('frontHost')}));

// Init routes
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// Init server
app.listen(app.get('port'), app.get('host'), error => {
  let mess = (error) ? error : `Server: ${app.get('host')}:${app.get('port')}/`
  if (!error) notifier.notify(`${mess}`);
});
