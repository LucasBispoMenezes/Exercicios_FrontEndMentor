const fetchApi = async () => {
  const response = await fetch('https://api.adviceslip.com/advice')
  const dados = await response.json()
  return dados
}




const addCard = async () => {
  const dados = await fetchApi()
  const advice = document.querySelector('.advice')
  const h3 = document.querySelector('.h3')

  advice.innerHTML = `"${dados.slip.advice}"`
  h3.innerHTML = `advice #${dados.slip.id}`
  
}


const btn = document.querySelector('.btn')
btn.addEventListener('click', addCard)

  

window.onload = () => {
    addCard()
  }