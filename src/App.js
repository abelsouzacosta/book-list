import React, { Component } from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaBody from "./components/TabelaBody";
import TabelaFoot from "./components/TabelaFoot";

class App extends Component {
  render() {
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaBody />
        <TabelaFoot />
      </table>
    );
  }
}

export default App;
