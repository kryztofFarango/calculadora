'use strict';
// Declaracion de Variables
var botones = document.querySelectorAll(".tecla"), //Recorremos los botones
    btn = botones.length, // Cantidad de botones que usaremos para hacer el bucle que recorrerá los botones
    numberString = " ", // Números entrantes como string
    display = document.querySelector("#display"), // lo usaremos para pintar los número
    acumulado = [], // array que usaremos para acumular los némeros entrantes y posteriormente usarlos como operandos
    operador  = 0, // Valor de los operadores
    typeEnter = 0, // Tipo de entrada número o string
    valor = " ",// Guardamos los valores de entrada para después agregarlos al array acumulado
    resultado = 1; // Valor para iniciar el ciclo de la operación
// Funciones de operaciones
function multiplicacion() {
  for (var i = 0; i < acumulado.length; i++) {
    resultado = acumulado[i] * resultado;
  }
}
//  ciclo para recorrer los botones y programar sus respectivos casos y condiciones
for (var i = 0; i < btn; i++) {
  //escuchamos el evento click en cada uno de los botones
    botones[i].addEventListener('click', function() {
        var id = this.getAttribute('id');// obtenemos el atributo id de cada uno de los botones y lo devuelve como string
        typeEnter = parseInt(id); // parseamos el atributo
// Concicionamos el tipo de dato y sabemos si no es el boton de igual
          if (typeof typeEnter == "number" && id != "igual") {
            //Anidamos una condicion
            if (isNaN(typeEnter)){ // si es NaN significa que ejecutamos un operador

              switch (id) {
                case "por":
                   operador = id // guardamos el tipo de operador para despues saber que tipo funcion ejecutar
                   acumulado.push(valor);// Agregamos el valor al array acumulado
                   valor=0;//reseteamos el valor para que reciba más valores
                   numberString="";// vaciamos el string
                   display.innerHTML = valor;// pientamos el valor 0 para indicar una nueva entrada de valores
                   // switch para saber el tipo de operador
                  break;
                default:

              }
              if (acumulado.lengh != 1){

              }

            }
            //Sí es un numero
            else {
              numberString += id; // aqui acumulamos los numeros de estranda como string
              valor = parseInt(numberString); // pasrseamos el valor. Este es el valos que agregamos al array acumular
              display.innerHTML = valor; // pintamos
            }
          }
          //Sí es igual
          else {
            acumulado.push(valor);// Agregamos al array acumulador
            // y evaluamos el tipo de operador para ejecutar la funcion respectiva
              switch (operador) {
                case "por":
                   multiplicacion();
                   display.innerHTML = resultado;
                   valor = resultado;
                   acumulado = [resultado];
                  break;
                default:
              }

          }
        //ON/Cv
    })
}

// Pedos a considerar, cuando vuelvo a hacer click en el por vuelve a hacer push al array tomando en cuenta que ya trae un valor
//¿cómo hacer para que al la segunda vez borre el array y sólo tenga el resultado primero y haga push al valor entrante siguiente?
// el For causa conflictos pero no sé por qué
