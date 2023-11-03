/*
function pocima(ingrediente1, ingrediente2 ){
    //instrucciones
    return pocima
}

// invocar
pocima(pelo,uñas)
*/

/*FORMAS DE DECLARACIÓN*/ 

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

