function playSound(e){
  //choose the audio tag of each key you press
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  //choose the div tag of each key you press
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  //if there's no this keyCode, then return to avoid error
  if (!audio) return;
  //the special method, currentTime of audio, which could jump to the time position of the audio, we set it to 0 everytime you start press the key
  audio.currentTime = 0;
  audio.play();
  //add playing to the classList to show the css style on the key class
  key.classList.add("playing");
}
//when presskey, play audio
window.addEventListener("keydown", playSound);

function removeTransition() {
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition))
