const JokeEl = document.getElementById('joke'),
    JokeBtn = document.getElementById('joke-button');

JokeBtn.addEventListener('click', makeJoke)


async function getJoke() {
    const NoOfJokes = 1;
    const url = `https://api.api-ninjas.com/v1/dadjokes?limit=${NoOfJokes}`;
    const apiKey = '3IsyHThSxdxMRbR+G004Zg==oiAThC2xhvn2JtZp';
    const options = {
        method: "GET",
        headers: {
            'X-Api-Key': apiKey
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    // const Jokes = data.map((item) => item.joke)
    const Jokes = data[0].joke
    return Jokes
}

function makeJoke() {
    JokeBtn.disabled = true;
    JokeBtn.innerText = 'Loading...'

    let Data = getJoke()
        .then(res => {
            JokeBtn.disabled = false;
            // res.forEach(joke => {
            //     JokeEl.innerHTML += `<h6>${joke}</h6>`
            // });
            JokeEl.innerText = res
            JokeBtn.innerText = 'Tell Me A Joke'
        })
        .catch(error => {
            JokeBtn.disabled = false;
            JokeBtn.innerText = 'Tell Me A Joke'
            JokeEl.innerHTML = "<strong style='color:red;'>Something Went Wrong Try Again Later<strong> :- <h4>Make sure you are connected to Internet</h4>"

        })
}