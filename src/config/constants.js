var port = normalizePort(process.env.PORT || "3000");

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    //  named pipe
    return val;
  }

  if (port >= 10) {
    //  port number
    return port;
  }

  return false;
}

const devConfig = {
  MONGO_URL: "mongodb://localhost/nodejsrestapi-dev",
};

const testConfig = {
  MONGO_URL: "mongodb://localhost/nodejsrestapi-test",
};

const prodConfig = {
  MONGO_URL: "mongodb://localhost/nodejsrestapi-prod",
};

const defaultConfig = {
  PORT: port,
};

function envConfig(env) {
  switch (env) {
    case "development":
      return devConfig;
    case "test":
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
