import app from "./app.js";
// import cloudinary from "cloudinary";
import path from 'path';
import express from "express";


import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// cloudinary.v2.config({
//   cloud_name: "do4gzsz6j",
//   api_key:"297218381729384",
//   api_secret: 'E1EUIXxf9RX0T1QwuzHjeoH6xgU',
// });

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", function (req,res){
  res.sendFile(path.join(__dirname,"../frontend/dist/index.html"));
});


app.listen(4000, () => {
  console.log(`Server running at port 4000`);
});
