const net = require("net");
const {IP, PORT} = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541"
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  console.log("hello Satya welcome to the game!");
  conn.on('connect', () => {
    conn.write('Name: SATYA');
    conn.write('Say: Hi');
  })

  return conn;
};

console.log("Connecting ...");
connect();