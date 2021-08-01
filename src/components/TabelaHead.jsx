import React from "react";

const TableHead = (props) => (
  <thead>
    <tr>
      <th colSpan="4">Tabela de Livros</th>
    </tr>
    <tr>
      <th>ISBN</th>
      <th>
        Título
        <div className="container-setinhas">
          <div onClick={() => props.ordenarCrescente()}>&#8593;</div>
          <div onClick={() => props.ordenarDecrescente()}>&#8595;</div>
        </div>
      </th>
      <th>Autor</th>
      <th></th>
    </tr>
  </thead>
);

export default TableHead;
