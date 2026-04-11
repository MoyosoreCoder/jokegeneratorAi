  new Typewriter('h1', {
  strings: 'welcome to mariamdev001 Ai',
  autoStart: true,
  cursor: "",
  delay: 100,
})

function displayJoke(response){
  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = response.data.answer
  console.log(response.data.answer)

}


function aiGenerateJoke() {
  alert("welcome")
  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t"
  let context = "Your are a funny AI Assistant that tells short and sweet jokes. The joke must be provided in HTML format. Example: <p>this is a joke</p>";
  let prompt = "Tell me a unique English joke"    
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let jokeElement = document.querySelector("#joke");

  // ✅ show loading BEFORE request
  jokeElement.innerHTML = "Generating a joke...";
  axios.get(apiUrl).then(displayJoke)
  
  console.log("Called api url")

}
let button = document.querySelector('button');
button.addEventListener('click', aiGenerateJoke); 