import React from 'react'

/* Importando Component Data */
import Data from './Data'

/* Importando Component Treino_02 */
import Treino_02 from './Treino_02'

export default function Body() {
    const cnl2 = () => {
        return 'CFB Cursos!!!!!'
    }

    const somar = (v1, v2) => {
        return v1 + v2
    }

    const multiply = (v3, v4) => {
        return v3 * v4
    }

    // Variaveis do component Data
    const cnl = 'CFB Cursos!'
    const yt = 'Youtube!'
    const crs = 'Reacy.js!'

    // Variaveis do component Treino_02
    const treino01 = 'Treino 01'
    const treino02 = 'Treino 02'
    const treino03 = 'Treino 03'

    return(
        <section>
            <h2>Curso de React</h2>
            <p>Se inscreva em nosso canal.</p>
            <p>Ative o sininho</p>
            <Data 
                canal_2={cnl} 
                youtube_2={yt} 
                curso_2={crs}
                somar = {somar}
                multiply = {multiply}
            />
            <Treino_02
                treino_01={treino01}
                treino_02={treino02}
                treino_03={treino03}
            />
        </section>
    )
}