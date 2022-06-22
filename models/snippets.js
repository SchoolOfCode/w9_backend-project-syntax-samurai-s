import { pool } from "../db/index.js";

export async function getSnippets(searchQuery) {
    console.log(`IT'S HERE! (from models) ${searchQuery} !`);
        const result = await pool.query(`SELECT * FROM snippets WHERE title LIKE '%' || $1 || '%'; ` , [searchQuery]);
            console.log(result.rows);
    return result.rows;
};

