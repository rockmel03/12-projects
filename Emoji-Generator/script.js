const nameEl = document.getElementById('emoji-name')
const btnEl = document.getElementById('btn')


let emoji = [];

btnEl.disabled = true;
nameEl.innerText = 'Loading...'

async function getEmoji() {
    let url = 'https://emoji-api.com/emojis?access_key=8c9242e4185b3558af20a0b8a91cd5774fc05c48';
    const response = await fetch(url);
    const data = await response.json();

    for (i = 0; i < data.length; i++) {
        emoji.push({
            emojiName: data[i].unicodeName,
            character: data[i].character,
        })
    }
    return data
}

getEmoji()
    .then(res => {
        btnEl.disabled = false;
        nameEl.innerText = 'click above to get emoji'

        btnEl.addEventListener('click', () => {
            let randomNum = Math.floor(Math.random() * emoji.length);
            btnEl.innerText = emoji[randomNum].character;
            nameEl.innerText = emoji[randomNum].emojiName;
        })
    })
    .catch(error => {
        btnEl.disabled = true;
        console.log('error', error)
        nameEl.innerHTML = `<strong style='color:red'>something went wrong</strong> </br> <small style='color:red'> check your internet Connection</small> </br> <small style='color:red'> try again later</small> `
    })
