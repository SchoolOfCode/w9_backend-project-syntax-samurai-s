import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000 || process.env.port;
import router from "./Routes/snippets.js";

app.use(express.json());
app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

// test route
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test route up and running!",
  });
});

app.use("/snippets", router);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});