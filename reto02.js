/*
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 */


//FUNCIONES

function nombre(){
console.log('Alejandro')
}

nombre()

function lenguaje(nombreLenguaje){
    console.log('Hola, esto es: '+nombreLenguaje)
}

lenguaje('JavaScript')

function suma(a,b){
    return a + b
}

let resultado = suma(3,5)

console.log('el resultado de la suma es: '+resultado)


// FUNCION DENTRO DE UNA FUNCION COMPROBACION



function comprobar(){

    function operacion(c,d){
        return c + d
        }

var sumita = operacion(2,5)

console.log('si se puede: ' + sumita)

}

comprobar()

// FUNCIONES YA CREADAS EN EL LENGUAJE - EJEMPLOS 

console.log('¡Hola!')

// alert('¡Legendario!')

var numero = parseInt('10')
console.log(numero);

var numerof = parseFloat('1.14')
console.log(numerof);

var numeroAleatorio = Math.random()
console.log(numeroAleatorio)

var fechaActual = new Date()
console.log(fechaActual)

//VARIABLES LOCALES Y GLOBALES

var globalVariable = "Soy una variable global"

function pruebaVariables() {
    // Variable local dentro de la función
    var localVariable = "Soy una variable local"

    console.log("Dentro de la función:")
    console.log("globalVariable:", globalVariable); // Acceso a la variable global dentro de la función
    console.log("localVariable:", localVariable); // Acceso a la variable local dentro de la función
}

//RETO EXTRA



let num = 0

function retoextra(texto1,texto2){
    for(let i = 0; i <= 100 ; i ++){
if(i % 3 === 0 && i % 5 === 0){
    console.log(texto1+' y '+texto2) 
    num++
} else if(i % 5 === 0){
console.log(texto2)
num++
}else if(i % 3 === 0 ){
    console.log(texto1)
num++
} else{
    console.log(i)
}
    }
return num
}

const impresiones = retoextra('Multiplo de 3','Multiplo de 5')
console.log('Resultado: ',impresiones)