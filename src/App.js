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

  // remove a linha da aplicação
  handleRemoverLinha = (id) => {
    // filtra todos os livros que não têm o id passado
    const livros = this.state.livros.filter((l) => l.id !== id);
    this.setState({ livros });
  };

  // ordena os livros em ordem crescente (alfabética)
  handleOrdenarCrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) =>
      a.titulo < b.titulo ? -1 : 0
    );
    this.setState({ livros });
  };

  // ordena o livro em ordem decrescente (contra-alfabética)
  handleOrdenarDecrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) =>
      a.titulo < b.titulo ? -1 : 0
    );
    livros.reverse();
    this.setState({ livros });
  };

  render() {
    return (
      <table className="tabela">
        <TabelaHead
          ordenarCrescente={this.handleOrdenarCrescente}
          ordenarDecrescente={this.handleOrdenarDecrescente}
        />
        <TabelaBody
          removerLinha={this.handleRemoverLinha}
          livros={this.state.livros}
        />
        <TabelaFoot qdeLivros={this.state.livros.length} />
      </table>
    );
  }
}

export default App;
