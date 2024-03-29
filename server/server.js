const http = require("http");
const app = require("./app");
const port = process.env.PORT || 5000;

const server = http.createServer(app);

require("./DB/connection");

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
