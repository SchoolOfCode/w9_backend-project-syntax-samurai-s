import { query } from "../index.js";

const sqlString = `DROP TABLE snippets`

async function dropTable() {
    const result = await query(sqlString);
    console.log("dropped table, bye!");
}

dropTable();
