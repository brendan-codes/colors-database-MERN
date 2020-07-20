const express = require('express');
const app = express();

const port = 9001;

const cors = require('cors');
app.use(cors());

app.use(express.json());

require('./server/config/database');
require('./server/config/routes')(app);

app.listen(port, () => {
    console.log(`App running on ${port}`)
});