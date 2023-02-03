import React from "react"

/* Importando Components */ 

export default function App() {
	const css = {
		color: 'blue',
		fontSize: '2em'
	}

	return(
		<>
			<h1 style={{color: '#f00', fontSize: '3em'}}>CFB Cursos</h1>
			<h2 style={css}>Curso de React</h2>
		</>
	)
}

