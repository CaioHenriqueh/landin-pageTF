function iniciotimer(duracao , display){

    var timer = duracao,minutos,segundos

    setInterval(function(){

        minutes = parseInt(timer / 60,10) 
        segundos = parseInt(timer % 60,10)

        minutes = minutos < 10 ? "0" + minutes : minutes;
        segundos = segundos < 10 ? 0 + segundos : segundos


        display.textContent = 

    })
    
    



}