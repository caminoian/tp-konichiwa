function convertir(texto){
let nuevotexto ="";
for (let i = 0; i < texto.length; i++) {
    let letraactual = texto.charAt(i);

    let esconstansten = "bcdfghjklnmpqrstvwxyz".includes(letraactual.toLowerCase());
    let vocal = i + 1 <texto.length && "aeiou".includes(texto.charAt(i + 1).toLowerCase());

    if(esconstansten && !vocal){
        nuevotexto += letraactual + "u";
    }else{
    nuevotexto += letraactual;
    
} 
}
}