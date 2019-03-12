const express = require("express");
const PORT = 3000 || process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(process.env.PORT || PORT, function() {
  console.log("Bot is listening on port " + PORT);
});
