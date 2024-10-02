function displayJoke(response) {
  console.log(response.data.answer);
  
  
new Typewriter("#joke", {
  strings: response.data.answer,
  autoStart: true,
  cursor: null,
  delay: 20,
});
}

function generateJoke(event) {
  event.preventDefault();

  let apiKey = "2ob113a879d9f74f53b31fb0t04ab5cb";
  let context = "Please be funny and brief and go directly to the joke include laughter emojis";
  let prompt = "Tell me a funny joke in pidgin";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  
  poemElement.classList.remove("hidden");
  poemElement.innerHTML= `<div class = "generating">⌛generating a joke...</div>`;
  

  console.log("called the AI api");
  axios.get(apiUrl).then(displayJoke);
}
let buttonElement = document.querySelector("button");
let loadingElement = document.querySelector("#loading");
buttonElement.addEventListener("click", generateJoke);
