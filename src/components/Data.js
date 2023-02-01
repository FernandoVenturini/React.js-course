import React from 'react'

export default function Data(props) {
    const n1 = 10
    const n2 = 5

    const v3 = 5
    const v4 = 9

    return(
        <section>
            <p>Canal: {props.canal_2}</p>
            <p>Youtube: {props.youtube_2}</p>
            <p>Curso: {props.curso_2}</p>
            <p>Teste: {props.treino_01}</p>
            <p>Teste2: {props.treino_02}</p>
            <p>Teste3: {props.treino_03}</p>
            <p>{'A Soma de ' + n1 + ' com ' + n2 + ' e igual ' + props.somar(n1, n2)}</p>
            <p>{'A Multiplicao de ' + v3 + ' com ' + v4 + ' e igual a ' + props.multiply(v3, v4)}</p>
        </section>
    )
}