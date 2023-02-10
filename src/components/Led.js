import React from "react";

import LedVerde from './imgs/led_verde.jfif'
import LedVermelho from './imgs/led_vermelho.jfif'

export default function Led(props) {

    return(
        <>
            <img src={props.ligado ? LedVerde : LedVermelho}/>
            <button onClick={() => props.setLigado(!props.ligado)}>{props.ligado ? 'Desligar' : 'Liga'}</button>
        </>
    )

}