function iniciotimer(duracao , tela){

    var timer = duracao,minutos,segundos;

    setInterval(function(){

        minutos = parseInt(timer / 60,10) 
        segundos = parseInt(timer % 60,10)

        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;


       tela.textContent = minutos + ":" + segundos;

        if(--timer < 0){
            timer = duracao;
        }
        if(tela.textContent == "01:30"){
            tela.classList.add("trtr")
        }
    },1000)
}
    
     window.onload = function(){
        var duracao = 60 * 5
        var tela = document.querySelector("#timer")

    iniciotimer(duracao , tela)
}

