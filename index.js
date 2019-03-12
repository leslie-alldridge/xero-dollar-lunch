require('dotenv').config();
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
  console.log(data)

  if (data.type !== "message" && !data.subtype){
    return
  }
  handleMessage(data.text, data.user)
})

handleMessage = (message, user) => {
  console.log(message );
  const params = {
    icon_emoji: ':cat:'
  }
bot.postMessage(user, `you wrote ${message}`, params).then(function(data) {
    console.log('message sent @@');
    
})
}

app.listen(process.env.PORT || PORT, function() {
  console.log("Bot is listening on port " + PORT);
});
