var text= prompt("Hola, ingrese una frase");
var text1= prompt("Hola, ingrese otra frase");

if (text.charAt(0) == text1.charAt(0)){
    console.log(true);
} else if (text.charAt(text.length-1) == (text1.charAt(text1.length-1))){
    console.log(true);
} else {
    console.log(false);
}