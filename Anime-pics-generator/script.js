const btnEl = document.querySelector('#btn');
const resultEl = document.querySelector('.result');
const linkEl = document.getElementById('link');
const imgEl = document.getElementById('img');

btnEl.addEventListener('click',()=>{
    btnEl.disabled = true;
    btnEl.innerText = 'Loading...'
    imgEl.src = 'loader.svg'
    
    getImg()
    .then(res =>{
        resultEl.style.display = 'block'
        btnEl.disabled = false;
        btnEl.innerText = 'Get Anime'

        imgEl.src = res.url;
        linkEl.href = res.url;
    })
    .catch(error =>{
        btnEl.disabled = false;
        btnEl.innerText = 'Get Anime'
        alert('ERROR: something went wrong try again later \n => Check your internet connection \n => Reload page again')
    })
})

// async function getImg() {
//     var url = 'https://api.waifu.pics/sfw/waifu';
//     const response = await fetch(url);
//     const data = await response.json();

//     console.log(data)
//     return data
// }



///other url you can try
async function getImg() {
    let url = 'https://nekos.best/api/v2/neko'
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.results[0].url)
    return data.results[0]
}
