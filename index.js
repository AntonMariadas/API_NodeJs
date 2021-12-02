const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('./src/config/dbConfig');
const companiesRoutes = require('./src/routes/companies');

const port = 8383;
app.use(cors());
app.use(bodyParser.json());
app.use('/api', companiesRoutes);

app.listen(port, () => {
    console.log(`listening on : http://localhost:${port}`);
});