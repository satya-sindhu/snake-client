const net = require("net");
const {IP, PORT} = require('./constants');

// setup interface to handle user input from stdin

// const setupInput = function (stdin.on("data", handleUserInput);) {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   return stdin;
// };

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    // host: "165.227.47.243",
    // port: "50541"
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  console.log("hello Satya welcome to the game!");

  conn.on('connect', () => {

    conn.write('Name: SATYA');
    conn.write('Say: Hi');
    // conn.write('Move: up'); 
    // conn.write('Move: left');
    // conn.write('Move: down');
    // conn.write('Move: right');
    //setTimeout(() => {conn.write('Move: up');}, 500);   
    //setTimeout(() => {conn.write('Move: left');}, 500);   
    //setTimeout(() => {conn.write('Move: down');}, 500);   
    //setTimeout(() => {conn.write('Move: right');}, 500);  
    
    //setInterval(() => {conn.write('Move: up');}, 500); 
    //setInterval(() => {conn.write('Move: left');}, 500); 
    //setInterval(() => {conn.write('Move: down');}, 500); 
    //setInterval(() => {conn.write('Move: right');}, 500); 
  })
  // interpret incoming data as text

  return conn;
};

module.exports = connect;