const express = require("express");
const SlackBot = require('slackbots')
const PORT = 3000 || process.env.PORT;
const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

let bot = new SlackBot({
  token: process.env.TOKEN,
  name: 'appy'
})

bot.on("start", () => {
  console.log('started')
})

bot.on('message', (data) => {
  if (data.type !== "message"){
    return
  }
  handleMessage(data.text)
})

handleMessage = (message) => {
  console.log(message);
  return 'i got your message'
}

app.listen(process.env.PORT || PORT, function() {
  console.log("Bot is listening on port " + PORT);
});
