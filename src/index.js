//Global vars
const url = 'http://localhost:3000/movies'

//DOM Selectors
const nav = document.querySelector('#movie-list')

//Event Listeners

const watchBtn = document.querySelector("#watched")
const drops = document.querySelector('#amount')

//Fetches
function getAllMovie() {
    return fetch(url).then(res => res.json())    
}


//Render Functions
function iterateMovies(moveArr){
    moveArr.forEach(movObj => renderInNav(movObj))
}

function renderInNav(movObj){
    console.log('movObj: ', movObj)
    const navImage = document.createElement('img')
    console.log('navImage: ', navImage)
    navImage.src = movObj.image
    navImage.addEventListener('click', () => renderDetail(movObj))
    nav.appendChild(navImage)
}

function renderDetail(movObj){
    const detailImg = document.querySelector("#detail-image")
    const title = document.querySelector('#title')
    const year = document.querySelector('#year-released')
    const description = document.querySelector('#description')
    detailImg.src = movObj.image
    title.textContent = movObj.title
    year.textContent = movObj.release_year
    description.textContent = movObj.description
    let watchval;
    movObj.watched ? watchval = "Watched" : watchval = "Unwatched"
    watchBtn.textContent = watchval
    drops.textContent = movObj.blood_amount
}

//Event Handlers

//Initializers
getAllMovie().then(movArr => {
    iterateMovies(movArr)
    renderDetail(movArr[0])
})