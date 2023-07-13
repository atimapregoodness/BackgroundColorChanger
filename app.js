const btn = document.querySelector('.colorBtn')
const body = document.querySelector('body')
const bgText = document.querySelector('#bg')

const ranColor = () => {
      let r = Math.random() * 275;
      let g = Math.random() * 275;
      let b = Math.random() * 275;
      const color = `rgb(${r},${g},${b})`
      bgText.textContent = color;
      bgText.style.color = color;
      return color;
}


btn.addEventListener('click', () => {
      body.style.backgroundColor = ranColor();
})