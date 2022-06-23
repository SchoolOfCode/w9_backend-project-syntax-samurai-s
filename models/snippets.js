import { pool } from '../db/index.js';

export async function getSnippets(searchQuery) {
	console.log(`IT'S HERE! (from models) ${searchQuery} !`);
	// SQL: select everything from the snippets table where there title contains value1 [expressed here]. || represents a space.
	const result = await pool.query(
		`SELECT * FROM snippets WHERE title LIKE '%' || $1 || '%'; `,
		[searchQuery]
	);
	console.log(result.rows);
	return result.rows;
}

export async function createNewSnippet(newSnippet) {
	const result = await pool.query(
		`INSERT INTO snippets(title, description, video, codesyntax, docs) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
		[
			newSnippet.title,
			newSnippet.description,
			newSnippet.video,
			newSnippet.codesyntax,
			newSnippet.docs,
		]
	);

	return result.rows;
}

export async function deleteSnippet(id) {
	const result = await pool.query(
		'DELETE FROM snippets WHERE id = ($1) RETURNING *;',
		[id]
	);
	return result;
}

export async function getAllSnippets() {
	const result = await pool.query('SELECT * FROM snippets');
	return result.rows;
}
