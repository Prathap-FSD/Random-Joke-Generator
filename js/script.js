let urlBtn = document.getElementById('urlBtn')
let jokeContent = document.getElementById('jokeContent')

let apiUrl = 'https://v2.jokeapi.dev/joke/Programming?type=single'

function  generateFact(){
fetch(apiUrl)
.then(response => response.json())
.then(r => jokeContent.innerHTML = r.joke)
}
    
urlBtn.addEventListener('click',()=>{
   generateFact()

})