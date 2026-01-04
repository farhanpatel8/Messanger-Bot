module.exports.config = {
  name: "start",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Imran",
  description: "Bot start command",
  commandCategory: "system",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
  return api.sendMessage(
    "✅ Bot online hai aur reply kar raha hai",
    event.threadID,
    event.messageID
  );
};
