import { query } from '../index.js';

//SQL string to create an empty table on Heroku
const sqlString = `CREATE TABLE IF NOT EXISTS snippets (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(60),
    description VARCHAR(500),
    video TEXT,
    codesyntax TEXT,
    docs TEXT
);`;

//Create table function executed via script
async function createTable() {
	const result = await query(sqlString);
	console.log('created table, yay!');
}

createTable();
