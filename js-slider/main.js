//quando clicco il font i che ha la classe next
$('.next').click(function() {
  // salvo la variabile con la classe visible
  var current_image = $('.visible');
  //resetto a tutti la classe visible
  $('.slider img').removeClass('visible');
  //salvo l'immagine successiva come fratello dell'imagine corrente grazie alla funzione next().
  var next_image = current_image.next('img');

  if(next_image.length > 0){
    //se la lunghezza è maggiore di 0 vuol dire che ci sarà un immagine succesiva e quindi aggiunge la classe visible alla prossima immagine
    next_image.addClass('visible');
  }else{
    //se è uguale a zero vuol dire che non ci sono immagini succcesive e vado a recuperare la prima immagine del div padre in questo caso la section con classe slider
    $('.slider img').first().addClass('visible');
  }
})

$('.prev').click(function() {
  //salvo la variabile con la classe visible
  var current_image = $('.visible');
  //levo la classe visible all'immagine corrente
  current_image.removeClass('visible');
  //creo una nuova variabile dove salvo il valore del fratello prima con la funzione prev()
  var prev_image = current_image.prev('img');

  if(prev_image.length > 0){
    //se la lunghezza è maggiore di 0 vuol dire che ci sarà un immagine prima e quindi aggiunge la classe visible all'immagine precedente
    prev_image.addClass('visible');
  }else{
     //se è uguale a zero vuol dire che non ci sono immagini precedenti quindi vado a recuperare l'ultoma immagine del div padre in questo caso la section con classe slider
     $('.slider img').last().addClass('visible');
  }
})
