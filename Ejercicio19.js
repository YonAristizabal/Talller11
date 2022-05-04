var letra= prompt("Ingrese una letra");

if (letra.length == 1 ){
    if (letra == 'a' | letra == 'e' | letra == 'i' | letra == 'o' | letra == 'u'){
        console.log("Es vocal");
    } else {
        console.log("NO es vocal");
    }
} else {
    console.log("No se pudo procesar el dato");
}