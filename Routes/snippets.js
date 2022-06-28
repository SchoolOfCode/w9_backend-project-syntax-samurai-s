import express from "express";
import {
  getSnippets,
  createNewSnippet,
  deleteSnippet,
  getAllSnippets,
} from "../models/snippets.js";

const router = express.Router();

// router.get("/", async function (req, res) {
//   const responseObject = { success: true, data: await getAllSnippets() };
//   res.json(responseObject);
// });

router.get("/", async function (req, res) {
  console.log(`Test received`)
  const searchQuery = req.query.title;
  console.log(`searched query log: ${searchQuery}`);
  // const result = await getSnippets(title);

  // define the object it'll return
  const responseObject = {
    success: true,
    data: await getSnippets(searchQuery),
    message: "please heckin work!",
  };
  // confirm in the console what the client requested
  console.log(`router get request worked`);

  // return the response object (defined above) as JSON
  res.json(responseObject);
});

router.post("/", async function (req, res) {
  const newSnippet = req.body;
  const result = createNewSnippet(newSnippet);
  res.json({ success: true, data: await result });
});

router.delete("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const result = deleteSnippet(id);
  res.json({ success: true, data: await result });
});

export default router;

// NOTE: changed "payload" to "data" because of a frontend / react specific method
