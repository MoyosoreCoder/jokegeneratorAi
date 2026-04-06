let button = document.querySelector('button')
let jokeDiv = document.querySelector('#joke')

function handleButtonClick() {
    console.log('button clicked')
    alert('welcome to the joke generator ai/api')
    jokeDiv.innerHTML = 'loading joke, please wait...'
    //joke api
    try{
        let result = fetch('https://v2.jokeapi.dev/joke/Any?type=single')
        .then(res =>
            res.json())
            .then(data=>{
                console.log(data)
                // tell me a joke
                jokeDiv.innerHTML =  data.joke
                
            })
            
    } catch(error) {
        console.error(error)
        jokeDiv.innerHTML = 'Error fetching joke 😢'

    }
}

button.addEventListener('click', handleButtonClick)