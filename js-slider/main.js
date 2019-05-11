//quando clicco il font i che ha la classe next
$('.next').click(function() {
  // salvo la variabile con la classe visible
  var current_image = $('.visible');
  //salvo la variabile con il pallino rosso
  var current_ball = $('.red_ball');
  //resetto a tutti la classe visible
  $('.slider img').removeClass('visible');
  //resetto la classe red ball a tutti
  $('.bullet_container i').removeClass('red_ball');
  //salvo l'immagine successiva come fratello dell'imagine corrente grazie alla funzione next().
  var next_image = current_image.next('img');
  //salvo il pallino successivo in una varibiale
  var next_ball = current_ball.next('i');
  if((next_image.length > 0) && (next_ball.length > 0)){
    //se la lunghezza è maggiore di 0 vuol dire che ci sarà un immagine succesiva e quindi aggiunge la classe visible alla prossima immagine
    next_image.addClass('visible');
    //e aggiungo la classe red ball al pallino successivo
    next_ball.addClass('red_ball');
  }else{
    //se è uguale a zero vuol dire che non ci sono immagini succcesive e vado a recuperare la prima immagine del div padre in questo caso la section con classe slider
    $('.slider img').first().addClass('visible');
    //e aggiungo la classe red_ball al primo pallino
    $('.bullet_container i').first().addClass('red_ball');
  }
})

$('.prev').click(function() {
  //salvo la variabile con la classe visible
  var current_image = $('.visible');
  //salvo la variabile con il pallino rosso
  var current_ball = $('.red_ball');
  //levo la classe visible all'immagine corrente
  current_image.removeClass('visible');
  //levo la classe red_ball al pallino corrente
  current_ball.removeClass('red_ball');
  //creo una nuova variabile dove salvo il valore del fratello prima con la funzione prev()
  var prev_image = current_image.prev('img');
  //salvo il pallino precedente in una variabile
  var prev_ball = current_ball.prev('i');

  if((prev_image.length > 0) && (prev_ball.length > 0)){
    //se la lunghezza è maggiore di 0 vuol dire che ci sarà un immagine prima e quindi aggiunge la classe visible all'immagine precedente
    prev_image.addClass('visible');
    //e aggiungo la classe red ball al pallino precedente
    prev_ball.addClass('red_ball');
  }else{
     //se è uguale a zero vuol dire che non ci sono immagini precedenti quindi vado a recuperare l'ultoma immagine del div padre in questo caso la section con classe slider
     $('.slider img').last().addClass('visible');
     //e aggiungo la classe red_ball all'ultimo pallino del div bullet_container
     $('.bullet_container').last().addClass('red_ball');
  }
})
