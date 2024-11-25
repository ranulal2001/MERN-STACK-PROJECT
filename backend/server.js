import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "do4gzsz6j",
  api_key:"297218381729384",
  api_secret: 'E1EUIXxf9RX0T1QwuzHjeoH6xgU',
});

app.listen(4000, () => {
  console.log(`Server running at port 4000`);
});
