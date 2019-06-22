  
  //Mayor de dos numeros
  
  (function(){
        var mayor = function(o1,o2){
            if(o1.tamano > o2.tamano){
                console.log(o1.tamano+' es mayor');
            }else if(o1.tamano===o2.tamano){
                console.log(o1.tamano+" y " +o2.tamano+' son iguales');
            }else if(o1.tamano < o2.tamano){
                console.log(o2.tamano+" es mayor");
            }
            
        };

        var x = {tamano:0}
        var y = {tamano:150}

        mayor(x,y);
    }());
