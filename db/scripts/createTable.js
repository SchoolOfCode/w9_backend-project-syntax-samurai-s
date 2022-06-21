import { query } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS snipped (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title TEXT,
    description TEXT,
    video TEXT,
    codesyntax TEXT,
    docs TEXT,
);`;

async function createTable() {
    const result = await query(sqlString);
    console.log(`created table, yay!`);
}

createTable();




