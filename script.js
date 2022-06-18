
//solution 1

// setInterval(digital,1000)

// function digital(){
// let clock=document.querySelector(".clock");
// let time=new Date()
// let hour=time.getHours()
// let minute=time.getMinutes()
// let second=time.getSeconds()

// hour<10 ? hour="0" + hour : hour;
// minute<10 ? minute="0" + minute : minute;
// second<10 ? second="0" + second : second;

// clock.innerText=hour + ":" + minute + ":" + second
// }



//solution 2

setInterval(()=>{
    let clock=document.querySelector(".clock");
    let time=new Date().toLocaleTimeString();
    clock.innerText=time;
})
