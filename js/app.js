// 1. Cifrando frase

// Creando función para cifrar
function cipher(phrase) {
  // Pidiendo una frase al usuario
  var phrase = document.getElementsByTagName("input")[0].value;

  // Obtener el caracter ASCII de cada letra y almacenar en un array
  var inputPhrase = [];
  for (i = 0; i < phrase.length; i++) {
    inputPhrase.push(phrase.charCodeAt(i));
  }

  // Aplicar fórmula
  for (j = 0; j < phrase.length; j++) {
    if (inputPhrase[j] >= 65 && inputPhrase[j] <= 90) { // Para letras MAYUSCULAS
      inputPhrase[j] = (inputPhrase[j] - 65 + 33) % 26 + 65;
    } else if (inputPhrase[j] >= 97 && inputPhrase[j] <= 122) { // Para letras minusculas
      inputPhrase[j] = (inputPhrase[j] - 97 + 33) % 26 + 97;
    } else {
      inputPhrase[j] = inputPhrase [j];
    }
  }

  // Transformar número en letra (Caracter ASCII)
  var outputPhrase = [];
  for (j = 0; j < phrase.length; j++) {
    outputPhrase.push(String.fromCharCode(inputPhrase[j]));
  }

  // Convertir el array en string y mostrar frase cifrada al usuario
  document.getElementById('resultado').innerHTML = outputPhrase.join('');
}

// 2. Descifrando frase

// Creando función para descifrar
function decipher(phrase) {
// Pidiendo una frase al usuario
  var phrase = document.getElementsByTagName("input")[0].value;

  // Obtener el caracter ASCII de cada letra y almacenar en un array
  var inputPhrase = [];
  for (i = 0; i < phrase.length; i++) {
    inputPhrase.push(phrase.charCodeAt(i));
  }

  // Aplicar fórmula
  for (j = 0; j < phrase.length; j++) {
    if (inputPhrase[j] >= 65 && inputPhrase[j] <= 90) { 
      inputPhrase[j] = (- 33) % 26 + inputPhrase[j];
    } else if (inputPhrase[j] >= 97 && inputPhrase[j] <= 122) {
      inputPhrase[j] = (- 33) % 26 + inputPhrase[j];
    } else {
      inputPhrase[j] = inputPhrase [j];
    }
  }

  // Transformar número en letra (Caracter ASCII)
  var outputPhrase = [];
  for (j = 0; j < phrase.length; j++) {
    outputPhrase.push(String.fromCharCode(inputPhrase[j]));
  }

  // Convertir el array en string y mostrar frase cifrada al usuario
  document.getElementById('resultado').innerHTML = outputPhrase.join('');
}
