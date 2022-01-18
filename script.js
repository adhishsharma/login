const diwali = () => {
    const countDate = new Date("JANUARY 1,2022 00:00:00 ").getTime();
    console.log(countDate);
const now = new Date().getTime();
const gap = countDate - now;
if(gap<0){
    clearInterval(timer);
    return ;
}

const second= 1000;
const minute = second * 60;
const hour = minute * 60 ;
const day= hour * 24 ;

const textday = Math.floor(gap/day);
const texthour = Math.floor((gap % day)/hour);
const textminute = Math.floor((gap % hour)/minute);
const textsecond = Math.floor((gap % minute)/second);
// console.log(textday);
// console.log(texthour);
// console.log(textminute);
// console.log(textsecond);

document.querySelector("#day1").innerText = textday;
document.querySelector("#day2").innerText = texthour;
document.querySelector("#day3").innerText = textminute;
document.querySelector("#day4").innerText = textsecond;
};

// diwali();
var timer = setInterval(diwali, 1000);
