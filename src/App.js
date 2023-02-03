import React from "react"

/* Importando CSS */
import './App.css'

/* Importando Components */ 
import Watch from "./components/Watch"

export default function App() {
	const css = {
		color: 'blue',
		fontSize: '2em'
	}

	return(
		<>
			<section className="caixa">

			<Watch/>

				<h1 style={{color: '#f00', fontSize: '3em'}}>CFB Cursos</h1>
				<h2 style={css}>Curso de React</h2>
				<p className="texto">Se inscreva no canal</p>
				<a href="https://lvfcode.com">&lt;LVF_Code&gt;</a>
			</section>
		</>
	)
}

