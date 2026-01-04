module.exports = {
  name: "start",
  run: async ({ api, event }) => {
    api.sendMessage(
      "Bot online hai aur reply kar raha hai ✅",
      event.threadID
    );
  }
};
