import http from "http";


const server = http.createServer((req, res) => {
  const random_number = Math.floor(Math.random() * 10);
  const number = random_number.toString();
 
  res.write(number);
  res.end("   this is the number we got ");
});

server.listen(8081);
