// Kullanıcını adını girmesi ve ekrana Merhaba kullanıcı Hoşgeldin yazıının DOM a işlenmesi
let userName = prompt("Adınızı Giriniz")
let info = document.querySelector("#myName")
info.innerHTML = `${userName}`
info.classList.add("bg-dark","text-center","text1-text-center");

// anlık saat ve tarihin alınma işlemleri 
function localtime()
{
  
    let date = new Date().toLocaleString()
    let zaman = document.querySelector("#myClock")
    zaman.innerHTML = ` ${date}  `
    zaman.classList.add("clock")
}
// set interval ile saniye kısmının artması
setInterval(localtime,1000)
