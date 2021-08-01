import React, { Component } from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaBody from "./components/TabelaBody";
import TabelaFoot from "./components/TabelaFoot";

class App extends Component {
  state = {
    livros: [],
  };

  componentDidMount() {
    fetch("/api/livros.json")
      .then((response) => response.json())
      .then((result) => this.setState({ livros: result }))
      .catch(function (error) {
        console.log(`Theres an error: ${error}`);
      })
      .finally(function () {
        console.log(`Página carregada`);
      });
  }

  render() {
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaBody livros={this.state.livros} />
        <TabelaFoot qdeLivros={this.state.livros.length} />
      </table>
    );
  }
}

export default App;
