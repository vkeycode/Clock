const secondHand = document.querySelector(".sec")
const minHand = document.querySelector(".min")
const hourHand = document.querySelector(".hour")

function setDate() {

    const now = new Date(); // Get Date
    const seconds = now.getSeconds(); // Get Seconds
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)` 

    const mins = now.getMinutes(); // Get Minutes
    const minsDegree = ((mins / 60) * 360) + 90
    minHand.style.transform = `rotate(${minsDegree}deg)`
    
    const hours = now.getHours(); // Get Hours
    const hoursDegree = ((hours / 12) * 360) + 90 
    hourHand.style.transform = `rotate(${hoursDegree}deg)`
    console.log(hours)
}

setInterval(setDate, 1000)