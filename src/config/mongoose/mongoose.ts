const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://shubhambhandari12345hb:HgI8XuhTeN7em1OK@cluster0.ucgw00u.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err: Error) => console.error("Error connecting to MongoDB:", err));
