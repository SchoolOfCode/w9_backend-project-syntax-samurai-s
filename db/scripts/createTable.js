import { query } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS snippets (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(60),
    description VARCHAR(500),
    video TEXT,
    codesyntax TEXT,
    docs TEXT
);`;

async function createTable() {
    const result = await query(sqlString);
    console.log("created table, yay!");
}

createTable();




