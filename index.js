// Calculadora

let primerValor = "";
let operador = "";
let esperandoSegundoValor = false;

const display = document.getElementById("display");

function escribirEnDisplay(input){
    if (esperandoSegundoValor) {
        display.value = "";
        esperandoSegundoValor = false;
    }
    display.value += input;
}

function definirOperador(op){
    primerValor = display.value; // Asigna el numero en el display a la variable
    operador = op; // Almacena el operador
    esperandoSegundoValor = true; // limpia el display
}

function limpiarDisplay(){
    display.value = "";
    primerValor = "";
    operador = "";
    esperandoSegundoValor = false;
}

function limpiarDecimales(num) {
    num = Number(num);
    let redondeado = num.toFixed(5); // Redondea a 5 decimales
    return redondeado.replace(/\.?0+$/, ""); // Evita que aparezcan ceros extras en el display

}

function calcular(){
    if (primerValor === "" || operador === "") return;

    const segundoValor = display.value;

    let resultado;
    try{
        resultado = eval(`${primerValor} ${operador} ${segundoValor}`);
    }
    catch(error){
        display.value = "Error";
    }

    resultado = limpiarDecimales(resultado);

    display.value = resultado;

    primerValor = resultado; // El resultado se asigna al primer valor para continuar con otra operacion
    operador = "";
}



