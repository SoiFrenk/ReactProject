import React from 'react';

const cliente = (props) => {
    return (
        <div>
            <p>cliente: {props.nome} - numero Bollini: {props.bollini} - data Ultima Spesa: {props.data}</p>
            <p>{props.children}</p>
        </div>
        )
}

export default cliente;