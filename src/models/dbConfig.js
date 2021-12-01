const mongoose = require('mongoose');
const database = "mongodb+srv://Anton:879718@cluster0.uivcu.mongodb.net/my_job_handler?retryWrites=true&w=majority";

mongoose.connect(database, {
    useNewUrlParser: true,
});

mongoose.connection
    .once('open', () => console.log("Connected"))
    .on('error', (error) => console.log("Your error", error));

