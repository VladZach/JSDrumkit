function playSound(e) {
  if(event.repeat) return
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!key) return
  key.classList.add('playing')
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  audio.currentTime = 0
  audio.play()
}

function transformBack(e) {
  if (e.propertyName != 'transform') return
  e.target.classList.remove('playing')
}

let keys = document.querySelectorAll('.key')
document.addEventListener('keydown', playSound)
keys.forEach(item => item.addEventListener('transitionend', transformBack))