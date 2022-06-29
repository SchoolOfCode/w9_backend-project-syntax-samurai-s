# Snippet Samurai

[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

<div style="text-align:center"><img src="https://i.imgur.com/xYKiF06.png" /></div>

## Overview

Snippet Samurai is a React-based App created with simplicity and cognitive load awareness in mind. This minimalistic search tool allows the user to search for and view code snippets, which are hosted on a Heroku database. The app suggests results based on text entered into the input field, and features a submission form which allows the user to post their own code snippets to the database. New entries to the database can instantly be accessed on the frontend.
<br>

## Features

- Code Snippet retrieval
- Code Snippet database entry
- Responsive UI
  <br>

## Installation / Run Locally

Install the Snippet Samurai Front/Back End using npm

```bash
  git clone
  cd w9_backend-project-syntax-samurai-s
  npm i
```

Start the BackEnd

```bash
  npm run dev
```

## Further Resources

Snippet Samurai Front-End Project [Git Respository](https://github.com/SchoolOfCode/w9_frontend-project-syntax-samurai-s)
<br>

## Environment Variables

<span style="font-family:Papyrus; font-size:1em;">_Not yet available at this time_</span>
<br>

## Code Example

```javascript
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
```

## Routes

```bash
  /snippets
  /snippets/submit
```

<br>
<br>

## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2

<br>

## Dependency Licenses

- React
  <br>
  [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
- React testing Library
  <br>
  [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
- Axios
  <br>
  [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
- Jest
  <br>
  [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
- PostgreSQL
  <br>
  [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Authors

- [Katie Walters](https://github.com/KatieClarinet)
- [Matt Davies](https://github.com/DevMattDavies)
- [Mari](https://github.com/wisteria-hawthorn)
- [CJ](https://www.https://github.com/Esva)

<span style="font-family:Papyrus; font-size:1em;">_document version: 1.0_</span>
