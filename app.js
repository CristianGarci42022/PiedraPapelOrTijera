//varibles constantes
const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";
//variables de resultados 
const EMPATE = 0;
const GANA = 1;
const PIERDE = 2;
//Recoger botones por Id
const priedaBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
//resultado por ID
const resultadoTexto = document.getElementById("start-text");
//id por imagenes del juego
const usuarioImg = document.getElementById("Usuario-img");
const maquinaImg = document.getElementById("Maquina-img")

//funcionabilidad de cada uno de los botones mediante un click
priedaBtn.addEventListener("click", ()=>{
    juegoUsuario(PIEDRA);
});
papelBtn.addEventListener("click", ()=>{
    juegoUsuario(PAPEL);
});
tijeraBtn.addEventListener("click", ()=>{
    juegoUsuario(TIJERA);
});
//se crea la funcion y se trasmte la opcion que a elegido el usuario
//Opcion de Usuario
function juegoUsuario(opcionUsuario){
     //resultado por imagenes del opcion del usuario
     usuarioImg.src= "imagenes/"+opcionUsuario+".png"
     resultadoTexto.innerHTML = "UN MOMENTO ESPERANDO EL RESULTADO";


     //ESCOGIENDO LA MAQUINA ENTRE DIFERENTES OPCIONES(IMAGENES)
     const interval = setInterval(function(){ 
        const opcionMaquina = calcularOpcionMaquina();
        maquinaImg.src= "imagenes/"+opcionMaquina+".png"
     },100);
     setTimeout(function(){
        clearInterval(interval);
        //Tiempo de espera del juego
        const opcionMaquina = calcularOpcionMaquina();
        const resultado = calcularResultado(opcionUsuario, opcionMaquina);
    
        //resultado por imagenes del opcion del maquina
        maquinaImg.src= "imagenes/"+opcionMaquina+".png"
        
        //ver por pantalla si se a GANADO o PERDIDO
        switch(resultado){
            case EMPATE:
                resultadoTexto.innerHTML = "!HAS EMPATADO¡";
                break;
            case GANA:
                resultadoTexto.innerHTML = "!EXELENTE HAS GANADO¡";
                break;
            case PIERDE:
                resultadoTexto.innerHTML = "!LO SIENTO HAS PERDIO¡";
                break;        
        }
     }, 2000)
    //Opcion del Maquina
    
} 
//funcion de resultado de la maquina y convertir el resultado de number a string(convertidor de numeros)
function calcularOpcionMaquina(){
    const numero = Math.floor(Math.random() * 3);
    switch (numero) {
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;        
    }
}
//funcionavilidad de maquina  
function calcularResultado(opcionUsuario, opcionMaquina){
    if(opcionUsuario == opcionMaquina){
        return EMPATE;
    }else if(opcionUsuario == PIEDRA){
            if(opcionMaquina == PAPEL){
                return PIERDE;
            }
            if(opcionMaquina == TIJERA ){
                return GANA;
            }
    }else if(opcionUsuario == PAPEL) {
            if(opcionMaquina == TIJERA){
                return PIERDE;
            }
            if(opcionMaquina == PIEDRA){
                return GANA;
            }
    }else if(opcionUsuario == TIJERA){
            if(opcionMaquina == PIEDRA ){
                return PIERDE;
            }
            if(opcionMaquina == PAPEL){
                return GANA;
            }
    }

} 