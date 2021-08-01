import React from "react";

const TableHead = () => (
  <thead>
    <tr>
      <th colSpan="4">Tabela de Livros</th>
    </tr>
    <tr>
      <th>ISBN</th>
      <th>
        Título
        <div className="container-setinhas">
          <div>&#8593;</div>
          <div>&#8595;</div>
        </div>
      </th>
      <th>Autor</th>
      <th></th>
    </tr>
  </thead>
);

export default TableHead;
