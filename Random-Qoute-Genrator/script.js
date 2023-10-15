const btnEl = document.getElementById('btn')
const quoteEl = document.getElementById('quote')
const authorEl = document.getElementById('author')



async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const quote = await response.json()
    // console.log(quote)
    return quote
  }

  btnEl.addEventListener('click',()=>{
    quoteEl.innerHTML = 'Loading...'
    authorEl.innerHTML = 'Updating...'
    btnEl.disabled = true
    randomQuote()
    .then(res =>{
        quoteEl.innerHTML = res.content;
        authorEl.innerHTML = res.author;
        btnEl.disabled = false
    })
    .catch((error)=>{
        quoteEl.innerHTML = `<strong style='color: red;'> Something went wrong try again later  </strong>`
        authorEl.innerHTML = `<small style='color: red;'>please check your network connection<small>`
        btnEl.disabled = false
    })
  })