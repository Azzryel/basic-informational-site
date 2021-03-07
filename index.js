const http = require("http");
const fs = require("fs");

http.createServer( (req, res) => {
    const urlPath = req.url;
    let filename = "." + urlPath + ".html";
    console.log(urlPath);

    if(urlPath == "/") {
        filename = "./index.html";
    }

    if (!fs.existsSync(filename)) {
        filename = "./404.html"
      }

      console.log(filename);
    fs.readFile(filename, (err, data) => {
        if (err) { 
            // with the above check, if file doesnt exists it will load 404.html, this error is sad
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 File does not exist");
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });
}).listen(8080);









