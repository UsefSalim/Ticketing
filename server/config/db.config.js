const mongoose = require('mongoose');
const Fawn = require('fawn');

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('Mongo Db Connected'))
  .catch((err) => console.log(`error connection to the DataBase :${err}`));
Fawn.init(mongoose);
