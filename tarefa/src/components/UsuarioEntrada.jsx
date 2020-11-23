import React from "react";

const UsuarioEntrada = (props) => {
    return (
        <div>
            <input type="text" id="login" name="login" value={props.usuario} onChange={props.alterar} />
        </div>
    );
};

export default UsuarioEntrada;
