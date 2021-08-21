const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello World!");
});

let listener = server.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
