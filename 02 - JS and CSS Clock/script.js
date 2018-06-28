function setTime() {
  var date = new Date();
  var second = date.getSeconds();
  const second_hand = document.querySelector('.second-hand');
  var second_deg = 90 + second / 60 * 360;
  second_hand.style.transform = `rotate(${second_deg}deg)`;

  var minute = date.getMinutes();
  const minute_hand = document.querySelector('.min-hand');
  var minute_deg = 90 + minute / 60 * 360;
  minute_hand.style.transform = `rotate(${minute_deg}deg)`;

  var hour = date.getHours();
  const hour_hand = document.querySelector('.hour-hand');
  var hour_deg = 90 + hour / 12 * 360;
  hour_hand.style.transform = `rotate(${hour_deg}deg)`;
  console.log(hour);
}
setInterval(setTime, 500);