import express from "express";
const router = express.Router();


router.get("/", async function (req, res, next) {
  res.render("index", { title: "Snippets" });
});

export default router;