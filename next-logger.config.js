const pino = require("pino");
const logger = (defaultConfig) => {
  return pino({
    ...defaultConfig,
    level: process.env.PINO_LOG_LEVEL || "error",
    timestamp: () => `,"timestamp":"${new Date(Date.now()).toISOString()}"`,
    formatters: {
      level: (label) => {
        return { level: label.toUpperCase() };
      },
      msg: (label) => {
        return { message: label };
      },
    },
  });
};

module.exports = {
  logger,
};
