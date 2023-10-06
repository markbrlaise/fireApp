const mongoose = require('mongoose');

const database = mongoose.connect('mongodb+srv://nasaTest:XilkZdnBTxTxlXV9@cluster0.tlu5s21.mongodb.net/firify?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });;

// const database = mongoose.connect(
//     `${process.env.DB_URL}`,
//     {
//         useNewUrlParser: true,
//         unseUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true
//     },
//     (error) => {
//         if(!error) {
//             console.log("Connected to mongoDB");
//         } else {
//             console.log(process.env.DB_URL);
//             console.log("Connection to mongoDB failed \n", + error);
//         }
//     }
// );

module.exports = database;
