const http = require("http");
const app = require("./app");
const port = 5000 || process.env.PORT;

const server = http.createServer(app);

require("./DB/connection");

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
