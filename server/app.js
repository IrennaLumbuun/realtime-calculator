const { Console } = require("console");

const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const port = process.env.PORT || 4001;

const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("logsUpdate", response);
  };

let interval;
let logs = [];

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.emit("update", logs);

   socket.on('newCalculation', (data) => {
      logs.push(data);
      if (logs.length > 10){
         logs = logs.slice(1,)
      } 
      socket.emit("update", logs);
  });

  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

http.listen(port, () => console.log(`Listening on port ${port}`));
