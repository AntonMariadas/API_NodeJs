const mongoose = require('mongoose');
require('dotenv').config();


const mongooseKey = process.env.MONGOOSE_KEY;
const databaseName = process.env.DATABASE_NAME;
const database = `mongodb+srv://${mongooseKey}@cluster0.uivcu.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

mongoose.connect(database, {
    useNewUrlParser: true,
});

mongoose.connection
    .once('open', () => console.log("Connected"))
    .on('error', (error) => console.log("Your error", error));

