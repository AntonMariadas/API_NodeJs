const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('./src/config/dbConfig');
const companiesRoutes = require('./src/routes/companies');


const port = process.env.PORT || 8383;
app.use(cors());
app.use(bodyParser.json());
app.use('/api', companiesRoutes);

module.exports = app.listen(port, () => {
    console.log(`listening on : ${port}`);
});
