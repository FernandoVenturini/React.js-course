import React from "react"

/* Importando as imagens */
import Logo from './components/img/Avatar.png'

export default function App() {

  const canal = () => {
    return('CFB Cursos')
  }

  function curso() {
    return 'Curso de React!'
  }

  const aluno = () => {
    return ('Fernando!')
  }

  //const canal = 'Fazendo o curso de Reactjs na CFB Cursos'
  //const curso = 'Curso de React.js'
  return(
    <>
    <header>
      <h1>{canal()}</h1>
      <h2>{curso()}</h2>
    </header>

    <section>
      <p>{'Aluno: ' + aluno()}</p>
      <img src={Logo} alt="Logo" />
      <img src="/img/3.ico" alt="" />
    </section>
    </>
  )
}

