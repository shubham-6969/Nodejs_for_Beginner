const http = require('http');

// NOTE: if you do any chamges in server file you need to restart the server again by ctrl + c

const PORT = 3000;

// web server

const server = http.createServer((req, res) => {
  if(req.url === "/") {
    res.write("<h1>Wellcome to node.js server</h1>");
    res.end();
  } 

  else if (req.url === "/About") {
    res.setHeader("Content-Type", "text/plain");
    res.write("My Name is Shubham follow me on linkedin http:www.linkedin.com/in/shubhampatwal017");
    res.end();
  }
  else {
    res.write("Page not found");
    res.end();
  }
})


server.listen(PORT, ()=> {
  console.log(`🎉Listening on PORT ${PORT}`);
});


// second way to create server 

/* const server2 = http.createServer((req, res) => {
  res.end("Wellocme to My web Server!");
});

server2.listen(8080, ()=> {
  console.log('Server running at http://localhost:8080')
}); */

// thired way to create server 

// create server 

/* const server3 = http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/plain'});
  res.end('Hello From Node.js Server!');
});

// listening server 

server3.listen(5000, ()=> {
  console.log('Server running on http://localhost:5000')
})
 */