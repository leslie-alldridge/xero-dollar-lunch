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
  let defaultReply =
    "Sorry your request wasn't understood. Please enter a dollar value e.g. $3 or get a random meal e.g. $3 random";

  let foodData = [
    ["$1 - Moro Bar"],
    [
      "$2 - Porridge. For lunch. (?)",
      "Dirty 'Don't-go-there' pies from the convenience stores"
    ],
    ["$3 - Muffin from BP garage", "$3+ - Sandwiches from Cozy Cake Shop"],
    [
      "4 pieces of sushi at One Sushi (BYO container to be more eco)",
      "$4.50 - Bacon and egg slice at Cozy Cake Shop",
      "$4.50 - Rice paper rolls at Cozy Cake Shop"
    ],
    [
      "$5 - Subway sub of the day",
      "$5 - 2 x Margherita slices at Tommy Millions",
      "$5 - Doughnut at Sixes and Sevens"
    ],
    [
      "$6 - BLT Ciabatta roll from New World",
      "$6 - Chups & dup from New World",
      "$6(?) - New World pie",
      "$6 - Mr Go's Bao of the week",
      "$6 - Pie / roll at Sixes and Sevens"
    ],
    [
      "$7 - Noodle bowl from Noodles Plus (née Chef’s Palette)",
      "$7 - Fish pie & cheese mash - Central Library cafe",
      "$7.50 - Mini burgers from Burger Fuel"
    ],
    [
      "$8 - Roti Chenai / Satay Skewers at Cinta  or Little Penang",
      "$8 - 'Special' at Taste of Home",
      "$8 - Delicious wraps at Les Mills",
      "$8.50 - Medium chicken caesar salad from New World"
    ],
    [
      "$9 - Rice chicken katsu at One Sushi",
      "$9.50 - Noodle chicken katsu at One Sushi",
      "$9.50 - Regular sized burger at Abrakebabra"
    ],
    [
      "$10 - Hand-pulled Noodles at Taste of Home",
      "$10 - Margherita at Pomodoro (Wed) & Scopa (Tue)",
      "$10 - Avo on toast at Leeds street bakery"
    ]
  ];

  // RANDOM OUTCOMES

  if (message.includes("$3 random")) {
    let item = foodData[2][Math.floor(Math.random() * foodData[2].length)];
    console.log(`your item is ${item}`);

    bot.postMessage(user, item, params).then(function(data) {
      console.log("message sent @@");
    });
  } else if (message.includes("$4 random")) {
    let item = foodData[3][Math.floor(Math.random() * foodData[3].length)];
    console.log(`your item is ${item}`);

    bot.postMessage(user, item, params).then(function(data) {
      console.log("message sent @@");
    });
  } else if (message.includes("$5 random")) {
    let item = foodData[4][Math.floor(Math.random() * foodData[4].length)];
    console.log(`your item is ${item}`);

    bot.postMessage(user, item, params).then(function(data) {
      console.log("message sent @@");
    });
  } else if (message.includes("$6 random")) {
    let item = foodData[5][Math.floor(Math.random() * foodData[5].length)];
    console.log(`your item is ${item}`);

    bot.postMessage(user, item, params).then(function(data) {
      console.log("message sent @@");
    });
  } else if (message.includes("$7 random")) {
    let item = foodData[6][Math.floor(Math.random() * foodData[6].length)];
    console.log(`your item is ${item}`);

    bot.postMessage(user, item, params).then(function(data) {
      console.log("message sent @@");
    });
  } else if (message.includes("$8 random")) {
    let item = foodData[7][Math.floor(Math.random() * foodData[7].length)];
    console.log(`your item is ${item}`);

    bot.postMessage(user, item, params).then(function(data) {
      console.log("message sent @@");
    });
  } else if (message.includes("$9 random")) {
    let item = foodData[8][Math.floor(Math.random() * foodData[8].length)];
    console.log(`your item is ${item}`);

    bot.postMessage(user, item, params).then(function(data) {
      console.log("message sent @@");
    });
  } else if (message.includes("$10 random")) {
    let item = foodData[9][Math.floor(Math.random() * foodData[9].length)];
    console.log(`your item is ${item}`);

    bot.postMessage(user, item, params).then(function(data) {
      console.log("message sent @@");
    });
  } else {
    bot.postMessage(user, defaultReply, params).then(function(data) {
      console.log("message sent @@");
    });
  }
};

app.listen(process.env.PORT || PORT, function() {
  console.log("Bot is listening on port " + PORT);
});
