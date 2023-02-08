const mongoose = require('mongoose');

//Builds the MongoDB connection string
const mongoURI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose.set('strictQuery', true);

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

const initDB = async () => {
  
  try {
      //Connects to MongoDB
      await mongoose.connect(mongoURI, dbOptions);
      console.log(`Connected to MongoDB database ${process.env.DB_NAME}`);
  } catch(err) {
        console.log(err.message);
  }

}

module.exports = initDB;