let keys = document.querySelectorAll('.key')
document.addEventListener('keydown', playSound)
keys.forEach(item => item.addEventListener('keydown', playSound))
function playSound(e) {
  console.log(e)
  if(event.repeat) return
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!key) return
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  audio.currentTime = 0
  audio.play()
}