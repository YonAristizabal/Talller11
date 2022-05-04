var numero= parseInt(prompt("Hola, ingrese un num"));
var numero1= parseInt(prompt("Hola, ingrese un segundo num"));
var numero2= parseInt(prompt("Hola, ingrese un tercer num"));

if (numero< numero1 & numero< numero2){
    console.log ("EL numero menor es "+ numero);
} else if (numero1< numero & numero1< numero2){
    console.log ("EL numero menor es "+ numero1);
} else if (numero2< numero & numero2< numero1){
    console.log ("EL numero menor es "+ numero2);
}

