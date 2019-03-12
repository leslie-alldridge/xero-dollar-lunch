const express = require("express");

const app = express();

const PORT = 3000;

app.listen(process.env.PORT || PORT, function() {
  console.log("Bot is listening on port " + PORT);
});
