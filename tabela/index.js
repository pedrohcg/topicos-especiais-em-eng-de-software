function calcular() {
  var n1 = document.getElementById("n1").value;
  var n2 = document.getElementById("n2").value;

  n1 = +n1;
  n2 = +n2;

  const table = document.createElement("table");
  const tbody = document.createElement("tdoby");

  const operacoes = ["+", "*", "/", "%"];
  const resultados = [n1 + n2, n1 * n2, n1 / n2, n1 % n2];

  const firstRow = document.createElement("tr");
  const firstCell = document.createElement("td");
  const firstCellText = document.createTextNode("Operações");
  firstCell.appendChild(firstCellText);
  firstRow.appendChild(firstCell);

  const secondCell = document.createElement("td");
  const secondCellText = document.createTextNode("Resultados");
  secondCell.appendChild(secondCellText);
  firstRow.appendChild(secondCell);

  tbody.appendChild(firstRow);

  for (var i = 0; i < 4; i++) {
    const row = document.createElement("tr");

    const cell = document.createElement("td");
    const cellText = document.createTextNode(`${n1} ${operacoes[i]} ${n2}`);
    cell.appendChild(cellText);
    row.appendChild(cell);

    const cell2 = document.createElement("td");
    const cellText2 = document.createTextNode(`${resultados[i]}`);
    cell2.appendChild(cellText2);
    row.appendChild(cell2);

    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  table.setAttribute("border", "2");

  document.getElementById("maindiv").appendChild(table);
}
