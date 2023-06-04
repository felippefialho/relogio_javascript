
(() => {
    function getTime(){
        const data = new Date()
        const hora = data.getHours()
        const minutos = data.getMinutes()
        const segundos = data.getSeconds()

        document.querySelector("p").textContent = `${hora} : ${minutos} : ${segundos}`
    } 
    setInterval(() =>{
        getTime()
    },1000)
})()












