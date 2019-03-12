require("dotenv").config();
const express = require("express");
const SlackBot = require("slackbots");
const PORT = 3000 || process.env.PORT;
const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

let bot = new SlackBot({
  token: process.env.TOKEN,
  name: "appy"
});

bot.on("start", () => {
  console.log("started");
});

bot.on("message", data => {
  console.log(data);

  if (data.type !== "message" && !data.subtype) {
    return;
  }
  handleMessage(data.text, data.user);
});

handleMessage = (message, user) => {
  console.log(message);
  const params = {
    icon_emoji: ":cat:"
  };
  let reply =
    "Sorry you request wasn't understood. Please enter a dollar value e.g. $3";

  if (message.includes('$3')){
    bot
    .postMessage(user, `I've found these lunch ideas: 
    - $3 - Muffin from BP garage
    - $3+ - Sandwiches from Cozy Cake Shop
    `, params)
    .then(function(data) {
      console.log("message sent @@");
    });
    
  } else if (message.includes('$4')){
    bot
    .postMessage(user, `I've found these lunch ideas: 
    - $4+ - 4 pieces of sushi at One Sushi (BYO container to be more eco)
    - $4.50 - Rice paper rolls at Cozy Cake Shop
    `, params)
    .then(function(data) {
      console.log("message sent @@");
    });
    
  } 
};

app.listen(process.env.PORT || PORT, function() {
  console.log("Bot is listening on port " + PORT);
});
