// Declare una variable y asígnale un valor inicial
var challenge = '30DaysOfJavaScript';

// Imprime la cadena en la consola del navegador
console.log(challenge);

// Imprime la longitud de la cadena en la consola del navegador
console.log(challenge.length);

// Cambia todos los caracteres a mayúsculas
console.log(challenge.toUpperCase());

// Cambia todos los caracteres a minúsculas
console.log(challenge.toLowerCase());

// Corta la primera palabra de la cadena
console.log(challenge.substr(0, 2)); // Esto cortará "30"

// Corta la frase "DaysOfJavaScript" de "30DaysOfJavaScript"
console.log(challenge.slice(2));

// Comprueba si la cadena contiene la palabra "Script"
console.log(challenge.includes("Script"));

// Divide la cadena en un array usando el espacio como separador
console.log(challenge.split(" "));

// Divide la cadena "30DaysOfJavaScript" en un array en las comas y cambia a un array
var companies = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon';
var companyArray = companies.split(",");
console.log(companyArray);

// Cambia "30DaysOfJavaScript" a "30DaysOfNode" usando replace()
challenge = challenge.replace("JavaScript", "Node");
console.log(challenge);

// Carácter en el índice 15
console.log(challenge.charAt(15));

// Código de carácter 'J' en la cadena
console.log(challenge.charCodeAt(challenge.indexOf('J')));

// Posición de la primera 'a' en la cadena
console.log(challenge.indexOf('a'));

// Posición de la última 'a' en la cadena
console.log(challenge.lastIndexOf('a'));

// Posición de la primera "because" en una oración
var sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// Posición de la última "because" en una oración
console.log(sentence.lastIndexOf('because'));

// Posición de la primera "because" en una oración usando search()
console.log(sentence.search('because'));

// Eliminar espacios en blanco al principio y al final de la cadena
var trimmedString = challenge.trim();
console.log(trimmedString);

// Comprobar si la cadena comienza con "30DaysOfJavaScript"
console.log(challenge.startsWith("30DaysOfJavaScript"));

// Comprobar si la cadena termina con "30DaysOfJavaScript"
console.log(challenge.endsWith("30DaysOfJavaScript"));

// Encontrar todas las 'a' en "30DaysOfJavaScript" usando match()
console.log(challenge.match(/a/g));

// Concatenar "30Daysof" y "JavaScript" en una sola cadena
var concatenatedString = "30Daysof".concat("JavaScript");
console.log(concatenatedString);

// Repetir la cadena "30DaysOfJavaScript" 2 veces
console.log(challenge.repeat(2));