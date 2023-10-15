const searchEl = document.getElementById('search')
const resultEl = document.getElementById('result')
const meaningContainer = document.getElementById('meaning-container')
const audioContainer = document.getElementById('audio-container')


async function getMeaning(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const response = await fetch(url)
    const data = await response.json()

    // console.log(data)
    return data[0]
}



searchEl.addEventListener('search', function (e) {
    const word = e.target.value
    meaningContainer.innerHTML = `Searching meaning for ${word}`
    !word ? meaningContainer.innerHTML = `<p style='text-align: center'> Please Enter a word </p>` : updateMeaning(word)
})


function updateMeaning(word) {
    getMeaning(word)
        .then((data) => {
            meaningContainer.innerHTML = '';
            audioContainer.innerHTML = '';
            meaningContainer.innerHTML = `<p style='text-tranform: uppercase'>Meaning of <b>${data.word}</b> </p>`;

            let meanings = data.meanings.map((i) => {
                return i.definitions[0].definition
            })

            meanings.forEach((element, idx) => {
                meaningContainer.innerHTML += `<p> ${idx + 1} : ${element}</p>`
            });
            let audios = data.phonetics.map((val) => val.audio)

            // console.log(audios);
            audios.forEach(i => audioContainer.innerHTML += `<audio controls src=${i}></audio>`)

        })
        .catch(error => {
            resultEl.innerHTML = `
        <div>
            <h2>Something went wrong</h2>
            <p>check your Internet Connection</p>
            <p>check your word it may dosn't exist</p>
            <strong>Reload Page Again</strong>
        </div>
        `
        })


}


