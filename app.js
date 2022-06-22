import express from "express";
const app = express();
const PORT = 3000 || process.env.port;
import router from "./Routes/snippets.js";

app.use(express.json());

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