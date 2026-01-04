module.exports.config = {
  name: "test",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "test",
  description: "test cmd",
  commandCategory: "system",
  usages: "",
  cooldowns: 0
};

module.exports.run = function({ api, event }) {
  api.sendMessage(
    "✅ TEST COMMAND WORKING",
    event.threadID,
    event.messageID
  );
};
