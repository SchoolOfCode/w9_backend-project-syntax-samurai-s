import express from "express";
const app = express();
const PORT = process.env.port || 3000;
//import router from "./Routes/index"

app.use(express.json());

// test route
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test route up and running!",
  });
});

//app.use("/crystals", router);


app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});