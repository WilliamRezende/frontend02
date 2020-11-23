import React, { Component } from "react";
import UsuarioEntrada from "./components/UsuarioEntrada";
import UsuarioSaida from "./components/UsuarioSaida";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { usuario: "William Rezende" };
        this.alteraValorUsuario = this.alteraValorUsuario.bind(this);
    }

    alteraValorUsuario(e) {
        this.setState({ usuario: e.target.value });
    }

    render() {
        return (
            <div className="App">
                <center>
                    <UsuarioEntrada usuario={this.state.usuario} alterar={this.alteraValorUsuario} />
                    <hr />
                    <UsuarioSaida usuario={this.state.usuario} mensagem="Essa mensagem foi enviada via PROPS" />
                </center>
            </div>
        );
    }
}

export default App;
