/*
function pocima(ingrediente1, ingrediente2 ){
    //instrucciones
    return pocima
}

// invocar
pocima(pelo,uñas)
*/

/*FORMAS DE DECLARACIÓN*/ 
/*
// declaración (busca primero estas funciones)
function lmoneda(){
    let moneda = Math.floor((Math.random()*2)+1);
    console.log(`El lanzamiento fue ${moneda}`);
    return moneda;
}

let lanzamiento = lmoneda();
console.log(`El lanzamiento fue ${lanzamiento}`);

function ganar(saldo,apuesta){
    return saldo +(apuesta*2)
}

function perder(saldo,apuesta){
    return saldo - apuesta
}

console.log(`¡Ganaste! Su saldo actual es ${ganar(10000,100)}`);
console.log(`¡Perdiste! Su saldo actual es ${perder(10000,100)}`);

// expression
let lanzar = function lanzarmoneda() {
    return lmoneda()
}

console.log(`El lanzamiento fue ${lanzar()}`);

// flecha (la que más se utiliza)
let p = (saldo,apuesta)=>{
    return saldo - apuesta
}
console.log(`¡Perdiste! Su saldo actual es ${p(10000,100)}`);

// anonymus
let g = function (saldo,apuesta){
    return saldo +(apuesta*2)
}
console.log(`¡Ganaste! Su saldo actual es ${g(10000,100)}`);

*/

/*EJERCICIO*/
let datos=()=>{
    let nombre = prompt('Ingrese su nombre');
    return nombre
}

let plata=()=>{
    return parseInt(prompt('Recarga inicial de plata: '));
}

let apuesta=()=>{
    return parseInt(prompt('¿Cuanto quieres apostar?: '));
}

let escoge=()=>{
    return parseInt(prompt('Escoge cara(1) o sello(2): '));
}

let lanzarmoneda = ()=>{
    let moneda = Math.floor((Math.random()*2)+1);
    console.log(`El lanzamiento fue ${moneda}`);
    return moneda;
}
let p = (saldo,apuesta)=>{
    return saldo - apuesta
}

let g = (saldo,apuesta)=>{
    return saldo - apuesta
}


let juego = ()=>{
    let nombre = datos();
    let pl = plata();
    let i = 1;
    while(i == 1){
        let a = apuesta();
        let e = escoge();
        let lanzamiento = lanzarmoneda();

        if (e == 1 && lanzamiento == 1){
            pl = g(pl,a)
            console.log(`¡Ganaste! Su saldo actual es ${pl}`);
        }else if(e == 2 && lanzamiento == 2){
            pl = g(pl,a)
            console.log(`¡Ganaste! Su saldo actual es ${pl}`);
        }else{
            pl = p(pl,a)
            console.log(`¡Perdiste! Su saldo actual es ${pl}`);
        }
        i = parseInt(prompt('¿Quieres seguir jugando? 1 si, 0 no: '));
    
    }
    console.log(`Tu saldo final es ${pl}`);
}

juego()
