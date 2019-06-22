
(function(){

    colleccion ={

        0:{nombre:"Lil Peep",
           tocado:20},

        2:{nombre:"Lil Pump",
           tocado:25},

        3:{nombre:"Lil Uzi Vert",
           tocado:30},

            }

    var album_favorito = function(colleccion){
        if(colleccion.length === 0){
            return;
        }
        var mas_reproducido = colleccion[0].tocado,
            mas_indice = 0;
        for(var i=0,len=colleccion.length;i<len;i++){
            mas_reproducido = colleccion[i].tocado;
            mas_indice=i;
        }
        return{play:mas_reproducido,index:mas_indice};
    };
    var music= colleccion;
    var fav = album_favorito(music);

    console.log("Tu album favorito fue tocado "+fav.play+" veces");
}());