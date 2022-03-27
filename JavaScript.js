function Media(){
    var valorSoma = parseFloat(document.getElementById("valor").value);
    var resultado = document.getElementById("resultado");
    var media = valorSoma /= 4;
  
    var notaFixada = media.toFixed(1)
    if(media > 7){
      resultado.innerHTML = parseFloat(notaFixada) + " Aprovado";
    }
    else if(media > 3 && media < 7){
      resultado.innerHTML = parseFloat(notaFixada) + " Recuperação";
    }
    else{
      resultado.innerHTML = parseFloat(notaFixada) + " Reprovado";
    }
    
  }
  
  