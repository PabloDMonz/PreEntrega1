//Calculadora de promedio general de alumno
alert ("Bienvenido: esto es un calculadora de promedios de cursado de alumnos")
let cantMaterias = parseInt(prompt("Cuantas asignaturas está cursando?"))
let contador = 0
let sumador = 0

function promedioNotas(nota1,nota2){
    asignatura = prompt("Nombre de la asignatura?")
    nota1 = parseFloat(prompt("Ingrese la primera nota"))
    nota2 = parseFloat(prompt("Ingrese la segunda nota"))
    let resultado = (nota1+nota2)/2;
    alert ("el promedio de la asignatura "+ asignatura + " es "+ resultado)
    return resultado
            
}

function sumaProm(){
    while(contador<cantMaterias){
        sumador += promedioNotas()
        contador++
        }
    promedioFinal = sumador/cantMaterias
        alert("el promedio final de todas las asignaturas es "+promedioFinal)

}

sumaProm()