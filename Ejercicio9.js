var txt = prompt("Hola, ingrese una texto");
var indice= prompt("Ingrese un numero menor a "+txt.length);

if(indice< Text.length){
    console.log("la primera letra es la "+ txt.charAt(0));
    console.log("El caracter en la posición es "+ txt.charAt(indice-1));
} else {
    console.log("El número ingresado es mayor a las letras del texto");
}
