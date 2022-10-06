//traer la dependencia de 
//componente suma 
import {sumar,restar} from './sumar.js'
import estudiantes from './materias.js'
import materias from './materias.js'

//let: variable 
let {first_name, last_name, DNI} = estudiantes 

//let a = 10 
//const: constante 
//const b = 29 
//console.log(`sumar  de a+b:${ sumar(a , b)}`)


//1. recorrido de areglos: forEach
materias.forEach((materia)=>{
    if(materia.profesor === 'Cristian Buitrago'){
        console.log(`materia:${materia.name}`)
        console.log(`notas:${materia.notas}`)
    }
})
 
//2. convertir a un arreglo de profesores 
// metodo map()
let profesores = materias.map(function(materia){
    return materia.profesor
})
console.log(profesores)

//3. agregar 
//push
materias.push(
    {
        id: 5,
        name: "CULTURA FISCA",
        profesor:"Luis Baquero",
        notas:[
            2,
            3.5
        ]
    }
)
console.log(materias)
//4. busqueda en arreglos:
//FIND 
const PHP = materias.find(function(materia){
    return materias.profesor === 'Cristian Buitrago'
})
console.log(PHP)
/*
console.log(`Nombre estudiante: ${first_name}`)
console.log(`Apellido estudiante: ${last_name}`)
console.log(`DNI estudiante: ${DNI}`)*/