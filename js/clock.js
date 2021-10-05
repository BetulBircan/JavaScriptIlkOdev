let userName = prompt("Adınızı Giriniz")
let info = document.querySelector("#myName")
info.innerHTML = `${userName}`
info.classList.add("bg-dark","text-center","text1-text-center");

function localtime()
{
  
    let date = new Date().toLocaleString()
    let zaman = document.querySelector("#myClock")
    zaman.innerHTML = ` ${date}  `
    zaman.classList.add("clock")
}
setInterval(localtime,1000)
