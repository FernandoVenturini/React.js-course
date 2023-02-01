import React from 'react'

/* Importando o logo */
import Logo from './img/Avatar.png'

export default function Header() {

    return(
        <header>
            <img src={Logo} alt="" />
            <h1>CFB Cursos</h1>
        </header>
    )
}