function reajuste() {
  var salarioAtual = document.getElementById("salarioAtual").value;
  var novoSalario, porcentagem;

  if (salarioAtual <= 954) {
    novoSalario = salarioAtual * 1.15;
    porcentagem = 15;
  } else if (salarioAtual <= 1903.98) {
    novoSalario = salarioAtual * 1.1;
    porcentagem = 10;
  } else if (salarioAtual <= 2826.65) {
    novoSalario = salarioAtual * 1.075;
    porcentagem = 7.5;
  } else {
    novoSalario = salarioAtual * 1.05;
    porcentagem = 5;
  }

  const p1 = document.createElement("text");
  const p1Text = document.createTextNode(`Salário antes do reajuste: `);
  const p1Value = document.createElement("b");
  const p1ValueText = document.createTextNode(`${salarioAtual}`);
  const br1 = document.createElement("br");
  p1Value.appendChild(p1ValueText);
  p1.appendChild(p1Text);
  p1.appendChild(p1Value);
  p1.appendChild(br1);

  const p2 = document.createElement("text");
  const p2Text = document.createTextNode(`Percentual de aumento aplicado: `);
  const p2Value = document.createElement("b");
  const p2ValueText = document.createTextNode(`${porcentagem}%`);
  const br2 = document.createElement("br");
  p2Value.appendChild(p2ValueText);
  p2.appendChild(p2Text);
  p2.appendChild(p2Value);
  p2.appendChild(br2);

  const p3 = document.createElement("text");
  const p3Text = document.createTextNode(`Valor do aumento: `);
  const p3Value = document.createElement("b");
  const p3ValueText = document.createTextNode(`${novoSalario - salarioAtual}`);
  const br3 = document.createElement("br");
  p3Value.appendChild(p3ValueText);
  p3.appendChild(p3Text);
  p3.appendChild(p3Value);
  p3.appendChild(br3);

  const p4 = document.createElement("text");
  const p4Text = document.createTextNode(`Novo salário, após o aumento: `);
  const p4Value = document.createElement("b");
  const p4ValueText = document.createTextNode(`R$${novoSalario}`);
  const br4 = document.createElement("br");
  p4Value.appendChild(p4ValueText);
  p4.appendChild(p4Text);
  p4.appendChild(p4Value);
  p4.appendChild(br4);

  document.getElementById("maindiv").appendChild(p1);
  document.getElementById("maindiv").appendChild(p2);
  document.getElementById("maindiv").appendChild(p3);
  document.getElementById("maindiv").appendChild(p4);
}
