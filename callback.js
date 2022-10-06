function imprimir  ( c ) {
    console.log(c)
}
//la funcion a ejecutar dentro de suma 
function sumar (a , b , callback){
        let suma = a + b
        callback( a + b)
}

let resultado=0; 

//ejecutar: llamar a sumar 
sumar(7, 8, imprimir(resultado))