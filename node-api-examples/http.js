const http = require("http");

const server = http
  .createServer((req, res) => {
    console.log(req.url);
    if(req.url === "/")
    {
      res.writeHead(200, "", {"Content-Type": "text/html"});
      res.write("<hl>Hello world</hl>");
      res.end();
    } else if (req.url === "/home"){
      res.writeHead(200, "", {"Content-Type": "text/html"});
      res.write("<hl>Hello Home</hl>");
      res.end();
    } else if(req.url === "/data"){
      res.writeHead(200, "", {"Content-Type": "application/json"});
      res.write(JSON.stringify({
        data: {
          name: "Chinedu"
        }
      }));
      res.end();
    } else {
      res.writeHead(404);
      res.end();
    }
  });

module.exports = server;