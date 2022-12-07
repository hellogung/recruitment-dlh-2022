const due = new Date("2022-12-12 23:59:59").getTime();
const countdown = document.querySelector("h3.countdown").innerHTML
console.log(countdown);

setInterval(() => {
  let now = new Date().getTime();
  let distance = due - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.querySelector("h3.countdown").innerHTML = 'aasdasdsd'

  if (distance < 0) {
    clearInterval(x);
    console.log("TIME'S UP");
  }
}, 1000);
