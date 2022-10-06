let colors = require('colors')
const estudiantes1 = ["Juan Diego", 
                    "Juan Camilo" ,
                    "Laura", 
                    "Nicolas"];
const estudiantes2 = ["Enrique", 
                    "Michael" ,
                    "Daniela", 
                    "Julian"];
const estudiantes3=["Veronica", 
                    ...estudiantes1,
                    "Paula", 
                    ...estudiantes2];

console.log(estudiantes3)

//desestructuracion arreglo:
//let [JD, JC, L, N] = estudiantes1
//console.log(JD.bgBrightCyan.brightRed,  JC.bgMagenta.brightCyan,L.bgBrightYellow.brightCyan,N.bgBrightWhite.red)
//console.log( estudiantes1[3])

//operador spread ()
