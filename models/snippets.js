import { pool } from "../db/index.js";

export async function getSnippets(searchQuery) {
    console.log(`IT'S HERE!`)
    const result = await pool.query(`SELECT * FROM snippets WHERE title LIKE '%${searchQuery}%';`);

    return result.rows;
};








