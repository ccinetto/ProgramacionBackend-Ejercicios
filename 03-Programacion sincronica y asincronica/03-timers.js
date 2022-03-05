// A) SetTimeout ejecuta una funcion pasada como argumento luego de un cierto delay pasado como argumentos (en MS)

setTimeout(() => {
    console.log(new Date(),"EJECUTANDO FUNCION DEMORADA")
}, 2000)



//B) SetInterval es similar a setTimeout solo que va a ejecutar la funcion periodicamente con el intervalo que le pasemo
//La funcion devuelve un identificador que nos servira para parar de ejecutar la funcion si queremos

let i = 0;
const timerId = setInterval(() => {
    console.log(new Date(),"EJECUTANDO FUNCION de forma periodica")
    i++;
    if(i >5){
        console.log(new Date(),'dejamos de ejecutar la funcion')
        clearInterval(timerId)
    }
}, 2000)
