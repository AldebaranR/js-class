var vestimenta = ['camisa','gorra','pantalon']

function minifuncion(item,index){
    console.log(index+''+item)
}

vestimenta.forEach(minifuncion)

let array = Array.from('1A2B3C4D')
console.log(array)

//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

let num = [32,33,15,40]
mifuncion1()

function validarArray(item){
    return item>= 19
}

function mifuncion1 (){
    console.log(num.every(validarArray))
}


let personas=[
    {nombre: "Alan", edad: 53},
    {nombre: "Abdiel", edad: 43},
    {nombre: "aldebaran", edad: 33},
    {nombre: "Uri", edad: 23},
    {nombre: "Kike", edad: 13},
]


let trabajadores=[
    {nombre: "Alan", edad: "senior"},
    {nombre: "a", edad: "junior"},
    {nombre: "b", edad: "fullstack"},
    {nombre: "c", edad: "back"},
    {nombre: "d", edad: "front"},
    {nombre: "f", edad: "scrum master"},
    {nombre: "h", edad: "lider de desarrollo"},
    {nombre: "j", edad: "lider de proyecto"},
    {nombre: "k", edad: "developer app mobile"},
    {nombre: "p", edad: "developer db"},
]
console.log(trabajadores.filter(funcionprueba=>trabajadores.edad="back"))
console.log("hola")