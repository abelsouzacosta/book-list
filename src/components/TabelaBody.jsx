import React from "react";

const TabelaBody = (props) => (
  <tbody>
    {props.livros.map((livro, index) => {
      return (
        <tr key={livro.id}>
          <td>{livro.id}</td>
          <td>{livro.titulo}</td>
          <td>{livro.autor}</td>
          <td>
            <button
              onClick={() => props.removerLinha(livro.id)}
              className="botao remover"
            >
              Remover
            </button>
          </td>
        </tr>
      );
    })}
  </tbody>
);

export default TabelaBody;
