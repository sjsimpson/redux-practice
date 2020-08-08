import express from "express";
import path from "path";

const app = express();

const PORT = 80;

console.log("production");

app.use(express.static(path.resolve(__dirname, "../../dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.listen(PORT, console.log("Server listening on port", PORT));