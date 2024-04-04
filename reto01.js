/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */


// OPERACIONES ARITMETICAS

a = 10
b = 2
c = 10

suma = a + b
resta = a - b
multiplicacion = a*b
division = a/b
modulo = a%b // residuo de la division
potencia = Math.pow(a,b)


console.log (' suma: ' + suma + ' \n resta: ' + resta + ' \n multiplicacion: '+ multiplicacion + ' \n divisoion: ' + division 
+ '\n modulo: ' + modulo + '\n potencia: '+ potencia)

console.log('----------------------OPERACIONES LOGICAS---------------------------')

// OPERACIONES LOGICAS
//AND
 if(a>0 && b < 15){
console.log('AND: TRUE')
 }else{
    console.log('AND: FALSE')
 }
//OR
 if(a>2 || a < 20){
    console.log('OR: TRUE')
 }else{
 console.log('OR: FALSE')   
 }
// NOT
 let llueve = true
 if(!llueve){
    console.log('No llueve')
 }else{
    console.log('utedes vieron ese rempalago')
 }

 console.log('-------------------------COMPARACIONES----------------------------')
 // COMPARACION
 if(a==c){
    console.log('Ambos son iguales')
 }else{
    console.log('Son distintos')
 }

 if(a!=b){
    console.log('son diferentes')
 }else{
    console.log('son iguales')
 }

 if(a>b){
    console.log(a + ' es mayor que '+ b)
 }

if(b<a){
    console.log(b + ' es menor que ' + a)
}

if(a>=10){
    console.log('es mayor o igual')
}

if(a <= 10){
    console.log('es menor o igual')
}

console.log('----------------------------ASIGNACIONES-----------------------')
// ASIGNACIONES

let x = 5

x += 3

console.log(x)

x -= 3

console.log(x)


x *= 3

console.log(x)

x /= 3

console.log(x)

x %= 3

console.log(x)

x **= 3 

console.log(x)

console.log('-----------------------IDENTIDAD---------------------------')
//IDENTIDAD
console.log(5===5)
console.log('5'===5)

console.log(5!==5)
console.log('5'!==5)


console.log('-------------------------PERTENENCIA -------------------------')
// PERTENENCIA 
const persona = {name: 'alejandro', edad: 24}
console.log('name' in persona)
console.log('carro' in persona)

class Car{}

const myCar = new Car()

console.log(myCar instanceof Car)
console.log('----------------------OPERADORES DE BITS ----------------------------')
// OPERADORES DE BITS 
//AND
const resultado = 5 & 3

console.log(resultado)
//or
const resultado1 = 5 | 3

console.log(resultado1)
//xor
const resultado2 = 5 ^ 3

console.log(resultado2)
// not

const resultado3 = ~5

console.log(resultado3)

// desplazamiento a la izquierda

const resultado4 = 5 << 1

console.log(resultado4)

// moviemiento a la derecha con signo

const resultado5 = -5 >> 1

console.log(resultado5)

// desplazamiento a la derecha sin signo
const resultado6 = -5 >>> 1

console.log(resultado6)

console.log('------- operadores -------')

var numero1 = 18
var numero2 = 15

if(numero1>numero2){
    console.log(numero1 + ' es mayor ' + numero2)
}else{
    console.log('es menor')
}

switch(numero1){
    case 9:
        console.log('es el numero: '+numero1)
        break

    case 18:
        console.log('es el numero: '+numero1)
        break
default:
    console.log('ni lo uno ni lo otro xd')
}

 let contador = 8

while(contador<numero1){
    console.log('sumamos uno mas: '+ contador)
    contador++
}

console.log('---- DO WHILE -----')

let j = 10

do{
    console.log('sumamos uno mas: '+ j)
    j++
}while(j<numero1)

const perros = ['pitbull','bullterrier','chihuagua']

perros.forEach(element => console.log(element))

for(let i = 0; i <= 5; i++){
    console.log('el valor de i es: '+ i)
}
// EXCEPCIONES
let q = 10 , k = 0
try{
    if(k==0){
        throw new Error('Ha ocurrido un error ...')
    }
    let resultado = q / k
    console.log(resultado)
} catch(error){
    console.log('se ha producido un error' + error.message)
} finally{
    console.log('este mensaje se ejecuta siempore')
}


console.log('----------------- PRUEBA EXTRA -------------')

for(let g = 10; g <= 55; g ++){
if(g!==16 && g % 2=== 0 && g % 3!==0 ){
console.log(g)
}
}