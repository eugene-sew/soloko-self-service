module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  host: env("HOST", "192.168.43.147"),
  // host: env("HOST", "192.168.1.117"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
