import React, { useState } from 'react'
import Led from './components/Led'

export default function App() {

	const [ligado, setLigado]  = useState(false);

	const cancelar = (obj) => {
		return obj.preventDefault()
		//return false
	}

	return(
		<>
			<Led ligado={ligado} setLigado={setLigado}/>
			<a
				href='https://lvfcode.com'
				target='_blank'
				onClick={(e) => cancelar(e)}
			>
				LVF_Code
			</a>
		</>
	);
}