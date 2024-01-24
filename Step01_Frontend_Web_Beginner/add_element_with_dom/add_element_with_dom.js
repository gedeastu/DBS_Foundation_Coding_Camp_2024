const body = document.body
const daftar = document.getElementById('daftar')
const newReceipt = document.createElement("li")
newReceipt.innerText = 'Selamat menikmati!'
daftar.appendChild(newReceipt)

const turnOnCompor = document.createElement('li')
turnOnCompor.innerText = "Hidupkan kompor"

const itemAwal = document.getElementById("awal")

daftar.insertBefore(turnOnCompor,itemAwal)