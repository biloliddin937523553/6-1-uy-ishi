function test() {
let time = new Date()
let h1 = document.querySelector('#h1')

h1.innerHTML = ` ${time.getHours()< 10 ? '0'+ time.getHours() : time.getHours()}:${time.getMinutes() < 10 ? '0'+ time.getMinutes() : time.getMinutes()}:${time.getSeconds() < 10 ? '0'+ time.getSeconds() : time.getSeconds()}`  
}
setInterval(()=>(
    test()
),1000)
let div = document.querySelector('.div0')

div.appendChild(h1)

// let soat = document.getElementById('hour')
// let minut = document.getElementById('minut')
// let secund = document.getElementById('secund')

// soat.innerHTML = time.getHours()
// minut.innerHTML = time.getMinutes()
// secund.innerHTML = time.getSeconds()
