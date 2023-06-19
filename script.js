let limpiarPantalla = false;
let resultado = 0;
let sePresionoOperador = false;

function insertarNumero(num) {
  let display = document.getElementById("display");
  if (
    limpiarPantalla ||
    display.value == "+" ||
    display.value == "-" ||
    display.value == "/" ||
    display.value == "*"
  ) {
    display.value = "";
    limpiarPantalla = false;
  }
  display.value += num;
  sePresionoOperador = false;
}

function insertarComa() {
  let display = document.getElementById("display");
  if (limpiarPantalla) {
    display.value = "0";
    limpiarPantalla = false;
  }
  if (!display.value.includes(",")) {
    display.value += ",";
  }
  sePresionoOperador = false;
}

function operador(op) {
  let valor = document.getElementById("display");
  let numero = valor.value.replace(",", ".");
  valor.value = op;
  return parseFloat(numero);
}

function operadorSuma() {
  if (!sePresionoOperador) {
    let valor = operador("+");
    resultado += valor;
    resultado += "+";
    sePresionoOperador = true;
  }
}

function operadorResta() {
  if (!sePresionoOperador) {
    let valor = operador("-");
    resultado += valor;
    resultado += "-";
    sePresionoOperador = true;
  }
}

function operadorDivision() {
  if (!sePresionoOperador) {
    let valor = operador("/");
    resultado += valor;
    resultado += "/";
    sePresionoOperador = true;
  }
}

function operadorMultiplicacion() {
  if (!sePresionoOperador) {
    let valor = operador("*");
    resultado += valor;
    resultado += "*";
    sePresionoOperador = true;
  }
}

function operadorIgual() {
  let valor = document.getElementById("display");
  resultado += parseFloat(valor.value.replace(",", "."));
  let resultadoFormateado = eval(resultado).toLocaleString();
  valor.value = resultadoFormateado;
  limpiarPantalla = true;
  resultado = 0;
  sePresionoOperador = false;
}

function reiniciar() {
  let display = document.getElementById("display");
  resultado = 0;
  display.value = "";
}
