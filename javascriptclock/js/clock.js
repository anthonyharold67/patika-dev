let myName = document.getElementById('myName');
let myClock = document.querySelector("#myClock");

let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
window.addEventListener('load',()=>{
    let userName = prompt("What is your name?","Enter your name");
    myName.innerHTML = userName;
   showTime()
})

function showTime(){
   
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let day = new Date().getDay();
    day = days[day];
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
    myClock.innerHTML = hour + ':' + min + ':' + sec +' '+day;
    setTimeout(showTime, 1000);
}
