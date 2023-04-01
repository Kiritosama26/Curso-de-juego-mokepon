
    let jugador=0
    let pc=0
    let triunfos=0
    let perdidas=0


    function aleatorio(max,min){

        return Math.floor(Math.random()*(max-min+1)+1)

    }

    function eleccion(numero, parter){

        let resultado=""

    if(numero==1){

    resultado=parter + " ,escogio piedra"



    }else if(numero==2){

        resultado=parter + " ,escogio papel"
        


    }else if(numero==3){

        resultado=parter + " ,escogio tijera"
        


    }  

    return resultado

    }



    while(triunfos<3 && perdidas<3){

    jugador=prompt("Elija 1 para piedra, elija 2 para papel , elija 3 para tijera")
    pc=aleatorio(3,1)

    alert(eleccion(jugador, "jugador"))
    alert(eleccion(pc, "pc"))







    if(pc==jugador){

        alert("empate")
        
    }else if((jugador==1 && pc==3) || (jugador==2 && pc==1) || (jugador==3 && pc==2)){


        alert("ganaste")

        triunfos++
    }else if((jugador==1 && pc==2) || (jugador==2 && pc==3) || (jugador==3 && pc==1)){

        alert("perdiste")

        perdidas++


    }





    }
    alert("ganaste" + triunfos + "veces y perdiste" + perdidas +"  veces")






