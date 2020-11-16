const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//mongodb+srv://jandrews16:chiaseed@cluster0.yejt8.mongodb.net/dbWorkout?retryWrites=true&w=majority
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require('./routes/api-routes.js'));
app.use(require('./routes/html-routes.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});