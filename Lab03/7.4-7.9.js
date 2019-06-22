//Ejercicio 7.4

//Codigo sin optimizar

if (persona) {
    var nombre = persona.obtenerNombre();
}

//Codigo optimizado

var nombre = persona && persona.obtenerNombre();



//Ejercicio 7.6

if(nombre){
    var encargado = nombre;
 } else{
    var encargado = "Algun nombre"
    }

//Codigo optimizado

var encargado = nombre || "Algun nombre"



//Ejercicio 7.7

function funcionExterna(variable){
    var variabledefuncionExterna = variable;
    return function funcionInterna() {
        return variabledefuncionExterna;
    }
}

var foo= funcionExterna(20);
foo();

//Ejercicio 7.9

var jugador = function(){
    var acumuladorPrivado = 0;
    return{
        "obtenerGoles":function(){
            return acumuladorPrivado;
        },
        "anotaGol":function(gol){
            if(gol>0)acumuladorPrivado +- gol;
        }
    };
};

var sergio = new jugador();
console.log(sergio.acumuladorPrivado);
console.log(sergio.obtenerGoles());
sergio.anotaGol(4);
console.log(sergio.obtenerGoles());


