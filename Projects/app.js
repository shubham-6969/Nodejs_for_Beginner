import { readFile, writeFile } from "fs/promises";  // to read file asynchorounsly using promises
import { createServer } from "http";    // to create http server
import path from "path";               // to handle file paths (cross- platform)
import crypto from "crypto";
import { link } from "fs";


const PORT = 3001;  // define server port
const DATA_FILE = path.join("data", "links.json")
// helper function serverfile

const serverFile = async (res, filePath, contentType) => {
    try {
        const data = await readFile(filePath);  // readfile the requested file
        res.writeHead(200, { "Content-Type": contentType });  // send HTTP 200 ok content type
        res.end(data);  // send file data to the browser
    } catch (error) {
        res.writeHead(404, { "Content-Type": "content/plain" }); // if file not found, send 404
        res.end("404 page not found"); // response body for 404

    }
}

const loadLinks = async ()=> {
    try {
        const data = await readFile(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        if(error.code === "ENOENT") {
            writeFile(DATA_FILE, JSON.stringify({}));
            return {};
        }
        throw error;
    }
}

const saveLinks = async(links)=> {
    await writeFile(DATA_FILE, JSON.stringify(links));
}

// Create server


const server = createServer(async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      return serverFile(res, path.join("P1", "index.html"), "text/html");
    } else if (req.url === "/style.css") {
      return serverFile(res, path.join("P1", "style.css"), "text/css");
    } else if(req.url === "/links"){
      const links = await loadLinks();

      res.writeHead(200, {"Content-type": "application/json"});
      return res.end(JSON.stringify(links));
    
    } else  {

      const links = await loadLinks();
      const shortCode = req.url.slice(1);
      if(links[shortCode]){
        res.writeHead(302, {location: links[shortCode]});
        return res.end();
      }

      res.writeHead(404, { "content-type": "text/html" });
      res.end("404 page is not found");

      res.writable(404, {"Content-Type" : "text/plain"});
      return res.end("Shortened URl is not found");
    }
  }

  if (req.method === "POST" && req.url === "/shorten") {
    const links = await loadLinks();

    let body = "";
    req.on("data", (chunk) => (body += chunk));

    req.on("end", async () => {
      console.log(body);
      const { url, shortCode } = JSON.parse(body);

      if (!url) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("URL is required");
      }

      const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

      if (links[finalShortCode]) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("Short code already exists. Please choose another");
      }

      links[finalShortCode] = url;
      await saveLinks(links);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: true, shortCode: finalShortCode }));
    });
  }
});


// Listening server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});