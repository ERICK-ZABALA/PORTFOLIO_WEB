function crearCampoEstrellas(numEstrellas) {
    // Creamos un elemento div vacío para almacenar las estrellas
    var divEstrellas = document.createElement('div');
  
    // Generamos las estrellas y las agregamos al elemento div
    for (var i = 0; i < numEstrellas; i++) {
      var estrella = document.createElement('i');
      estrella.classList.add('fas', 'fa-star');
      divEstrellas.appendChild(estrella);
    }
  
    // Retornamos el elemento div con las estrellas
    return divEstrellas;
  }
  