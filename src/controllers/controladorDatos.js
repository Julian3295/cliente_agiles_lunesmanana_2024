import { gastos } from "./simuladorBD.js";

console.log(gastos)

//Yo como cliente quisiera poder ver los gastos mayores a 10000

//funciones para flitral datos en los arreglos 

let filtroMonto=gastos.filter(function(gastos){
    return gastos.monto>10000
})

//rutina para traversing
let fila=document.getElementById("fila")

//recorrer el arreglo de datos que voy a pintar
gastos.forEach(function(gastos){
    //rutina para acceder a la info de cada gasto 
})
