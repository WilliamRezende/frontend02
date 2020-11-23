import React from "react";

const UsuarioEntrada = (props) => {
    return (
        <div>
            <p>
                Primeiro parágrafo: <b>{props.usuario}</b>
            </p>
            <p>
                Segundo parágrafo: <b>{props.mensagem}</b>
            </p>
        </div>
    );
};

export default UsuarioEntrada;
