const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });

  res.end(`
    <h1>GitHub Actions CI/CD Project</h1>
    <p>Application deployed successfully!</p>
    <p>Server: Amazon Linux EC2</p>
  `);
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Application running on port 3000");
});
