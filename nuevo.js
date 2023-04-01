let vidajugador=3
let vidaenemigo=3
let ataquejugador
let ataqueenemigo

function reiniciar(){

    location.reload()
}




function iniciarjuego(){

    let rei = document.getElementById("reinicio")
    rei.style.display ="none"

    let seleccionarataque = document.getElementById("seleccion_ataque")
    seleccionarataque.style.display ="none"
    let seleccionpokeboton = document.getElementById("botonselectordepokemon")
    seleccionpokeboton.addEventListener('click', seleccionarpokemondeljugador)
    

    let refresh = document.getElementById('refresh');
    let botonfuego = document.getElementById("botonfuego")
    let botonagua= document.getElementById("botonagua")
    let botonplanta= document.getElementById("botonplanta")

    botonfuego.addEventListener("click", ataquefuego)
    botonagua.addEventListener("click", ataqueagua)
    botonplanta.addEventListener("click",ataqueplanta)
    
    refresh.addEventListener('click', reiniciar)

}

function pelea(){



    let ganancia=""
    let tuvida= document.getElementById("tuvida")
    let suvida = document.getElementById("suvida")
  
    if(ataquejugador==ataqueenemigo){
        ganancia="empate"

    }else if((ataquejugador=="Ascuas" && ataqueenemigo=="Follaje") || 
    (ataquejugador=="Surf" && ataqueenemigo=="Ascuas") || 
    (ataquejugador=="Follaje" && ataqueenemigo=="Ascuas")){

        vidaenemigo--

        suvida.innerHTML=vidaenemigo
        ganancia="Le diste"
    }else{
        ganancia="Te golpearon"
        vidajugador--
        tuvida.innerHTML=vidajugador
    }

    if(vidaenemigo==0){

        alert("felicidades has ganado esta partida")
    let botonfuego = document.getElementById("botonfuego")
    let botonagua= document.getElementById("botonagua")
    let botonplanta= document.getElementById("botonplanta")

    botonfuego.disabled = true
    botonagua.disabled=true
    botonplanta.disabled=true

    let rei = document.getElementById("reinicio")
    rei.style.display ="block"
   
        
    }else if(vidajugador==0){
        let botonfuego = document.getElementById("botonfuego")
    let botonagua= document.getElementById("botonagua")
    let botonplanta= document.getElementById("botonplanta")

    botonfuego.disabled = true
    botonagua.disabled=true
    botonplanta.disabled=true

    let rei = document.getElementById("reinicio")
    rei.style.display ="block"

        alert("aaw perdiste intentalo de nuevo")
    }

    return ganancia




}

function parrafo(){

    if(!(vidaenemigo==0 || vidajugador==0)){

    let p = document.getElementById("mensajes")

    let parrafo = document.createElement('p')
    parrafo.innerHTML="Usaste"+ ataquejugador + " y tu enemigo uso" + ataqueenemigo + "," + pelea()

    p.appendChild(parrafo)

}else{
    alert("YA TERMINASTE")
}
}





function ataquefuego(){

    
    ataquejugador="Ascuas"
    
    
   
    ataquealeatorio()
    

    

    


}
function ataqueagua(){

    
    
    ataquejugador="Surf"
    
    
    
    ataquealeatorio()
    


}
function ataqueplanta(){

    
    ataquejugador="Follaje"
    
    

    ataquealeatorio()
    


}

function ataquealeatorio(){

    let math= Math.floor(Math.random()*(3-1+1)+1)
    

    if(math==1){

        ataqueenemigo="Ascuas"
    }else if(math==2){

        ataqueenemigo="Surf"

    }else if(math==3){

        ataqueenemigo="Follaje"

    }
     
    

    parrafo()

    



}

function alerta(){

    alert("Por favor selecciona un pokemon")

}

function verificarpokemon(poke){

    let pokemon = document.getElementById(poke).checked
    return pokemon

}



function seleccionarpokemondeljugador(){

    let doc= document.getElementById("spanpokemonelegido")
    let im= document.getElementById("imgchange1")

    if(verificarpokemon("fuecoco")){

        im.src = "fuecoco.png"
        doc.innerHTML = "Fuecoco"
        

    }else if(verificarpokemon("Sprigatito")){

        
        im.src = "sprigatito.jpg"
        doc.innerHTML = "Sprigatito"


    }else if(verificarpokemon("Quaxly")){

        im.src = "quaxly.jpg"
        doc.innerHTML = "Quaxly"


    }else{

        alert("Elige un Pokemon")
    }

    selecciondepokemonenemigo()

    let seleccionarataque = document.getElementById("seleccion_ataque")
    seleccionarataque.style.display ="block"

    let seleccionarpoke = document.getElementById("seleccion_pokemon")
    seleccionarpoke.style.display ="none"

    

}

function aleato(max,min){

   return Math.floor(Math.random()*(max-min+1)+min)
}



function selecciondepokemonenemigo(){


    let al= aleato(3,1)
    let enemigo = document.getElementById("pokeenemigo")
    let im2= document.getElementById("imgchange2")


    if(al==1){

        im2.src= "fuecoco.png"
        enemigo.innerHTML = "Fuecoco"


    }else if(al==2){

        im2.src = "sprigatito.jpg"
        enemigo.innerHTML = "Sprigatito"


    }else if(al==3){

        im2.src = "quaxly.jpg"
        enemigo.innerHTML = "Quaxly"
    }

}







window.addEventListener('load', iniciarjuego)