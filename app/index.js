import express from 'express';
//fix para __dirname
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


// creat server 
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log(`Server on port ${app.get("port")}`);

//configuraciones 
app.use(express.static(__dirname + "/public"));


// rutas
app.get("/", (req, res) => res.sendFile(__dirname + "/pages/home.html"));
app.get("/login", (req, res) => res.sendFile(__dirname + "/pages/login.html"));
app.get("/register", (req, res) => res.sendFile(__dirname + "/pages/register.html"));
app.get("/admin", (req, res) => res.sendFile(__dirname + "/pages/admin/admin.html"));



