import "./bootstrep";
import path from "path";
import Server from "./Server";

const server = new Server().boot();

server.app().get("/", (req, res) => {
  res.sendFile(path.resolve("src", "public", "index.html"));
});
