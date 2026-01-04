const fs = require("fs");

module.exports.config = {
  name: "statuspro",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed by Arun",
  description: "status command",
  commandCategory: "no prefix",
  usages: "",
  cooldowns: 5
};

module.exports.handleEvent = function({ api, event }) {
  const { threadID, messageID, body } = event;

  // SAFE GUARD
  if (!body) return;

  if (
    body.startsWith("+status") ||
    body.toLowerCase().startsWith("status")
  ) {
    api.sendMessage(
      "Sabar karo mera net slow hai status load ho raha hai...⌛",
      threadID,
      messageID
    );
    api.setMessageReaction("🍁", messageID, () => {}, true);
  }
};

module.exports.run = function () {};
