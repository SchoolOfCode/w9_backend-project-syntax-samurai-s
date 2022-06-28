import { query } from "../index.js"

import { snippets } from "../../data/db.js"

async function populateTable() {
    for(let i = 0; i < snippets.length; i++){
         const result = await query(
            `INSERT INTO snippets(title, description, video, codesyntax, docs) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
            [ snippets[i].title, snippets[i].description, snippets[i].video, snippets[i].codesyntax, snippets[i].docs  ]
        );
        console.log(result.rows[0].title, "inserted");
    }
}

populateTable();






