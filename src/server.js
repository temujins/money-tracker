const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const routes = require('./routes/routes');
const connectToDb = require('./db/connect');

const app = express();
/** Middleware */
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(config.PORT, () => {
    connectToDb();
    console.log(`Server running on ${config.PORT}`);
});
