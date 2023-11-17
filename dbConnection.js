const mongoose = require('mongoose');
const dbConnection = mongoose
  .connect(
    "mongodb+srv://weaveit23:task0123@cluster0.oyreec6.mongodb.net/your-database-name?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("db connected"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));


  module.exports = dbConnection;