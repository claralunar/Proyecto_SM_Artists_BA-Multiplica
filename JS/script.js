

// BOTON DE SUBSCRIPCION
var boton = document.querySelector('button')
boton.addEventListener('click',function(){
    const userInput =prompt ('Ingrese su email:');
})

// CLICK EN IMAGEN
var mysong =new Audio();
mysong.src="./audio/aespa - Welcome to my world.mp3";
const playsong=()=>{
    mysong.play();
 
}
const pausesong=()=>{
    mysong.pause();
}

var mysong2 =new Audio();
mysong2.src="./audio/limitless nct.mp3";
const playsong2=()=>{
    mysong2.play();
 
}
const pausesong2=()=>{
    mysong2.pause();
}


