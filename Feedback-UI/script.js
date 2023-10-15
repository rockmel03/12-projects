const ratingEl = document.querySelectorAll('.rating')
const feedBackContainer = document.getElementById('container')
const sendbtnEl = document.querySelector('#send-button');


ratingEl.forEach(element => {
    element.addEventListener('click', function (e) {
        removeActive();
        e.target.classList.add('active') ||
            e.target.parentNode.classList.add('active')
    })
});


function removeActive() {
    ratingEl.forEach(element => {
        element.classList.remove('active')
    })
}


sendbtnEl.addEventListener('click', () => {
    const activeEl = document.querySelector('.rating.active');
    const rating = activeEl.querySelector('small').innerText;
    removeActive()
    feedbackNote(rating)
})

function feedbackNote(rating) {
    if (rating) {
        feedBackContainer.innerHTML = `
    <h1 class="heading">Thank You!</h1>
    </br>
    <strong>Feedback : ${rating}</strong>
    </br>
    </br>
    <p>We'll use your feedback to improve our 
    </br> 
    Customer Support</p>
    `
    }
}