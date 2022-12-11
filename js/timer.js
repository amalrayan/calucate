let day = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minute = document.querySelector(".minuts");
let secound = document.querySelector(".secound");

let start=()=>{
    let countdown = new Date("Dec 31,2022 23:59:59").getTime();
    console.log(countdown);
    let counter = setInterval(() => {
      let date = new Date().getTime();
      let datediff = countdown - date;
      //////////////////////////////////////
      let days = Math.round(datediff / 1000 / 60 / 60 / 24);
      console.log(days);
      day.innerHTML = days;
      ////////////////////////////////////
      let hour = Math.round((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      console.log(hour);
      hours.innerHTML = hour;
      //   ///////////////////////////////////////////
      let minutes = Math.round((datediff % (1000 * 60 * 60)) / (1000 * 60));
      console.log(minutes);
      minute.innerHTML = minutes;
      //////////////////////////////
    
      let secounds = Math.round((datediff % (1000 * 60)) / 1000);
      console.log(secounds);
      secound.innerHTML = secounds;
      let allSpan=document.getElementById("span").classList;
      allSpan.remove("all-span");
    }, 1000);
    
}

