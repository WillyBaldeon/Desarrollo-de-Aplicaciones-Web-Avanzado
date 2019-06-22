(function(){

    function Sumar () {
        var numeros = []
        return {
          agregar: function (a) {
            hola = numeros.push(a)
          },
          obtenerSumaActual: function () {
            if (numeros.length === 0) {
              return 0
            }else {
              var resul = 0
              for (let i = 0; i < numeros.length; i++) {
                resul += numeros[i]
              }
              return resul
            }
          }
        }
      }

    var s1=Sumar();
    var s2=Sumar();

    s1.agregar(10);
    s1.agregar(20);

    s2.agregar(30);
    s2.agregar(05);

console.log(s1.obtenerSumaActual());
console.log(s2.obtenerSumaActual());

}());