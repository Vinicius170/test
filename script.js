function ToggleMode() {
  const body = document.body
  body.classList.toggle('light')

  console.log('Modo light:', body.classList.contains('light'))

  const img = document.querySelector('#profile img')
  img.src = body.classList.contains('light')
    ? './assets/avatar-light.png'
    : './assets/avatar.png'
}


 

