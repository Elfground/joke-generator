function fetchJokes(response) {
    //console.log(response.data.answer);
    let jokeText = document.querySelector("#joke");
    jokeText.classList.add("joke-delivery");
    //jokeText.innerHTML = response.data.answer;
    new Typewriter(jokeText, {
      strings: response.data.answer,
      autoStart: true,
      cursor: "",
      delay: 50,
    });
  }
  
  function clicked() {
    let apiKey = "2f78437a500ef24fc3e9894233eftb0o";
    let context =
      "You are a comedy genius with a broad variety of winter and christmas themed jokes";
    let prompt = "Tell me a good christmas joke";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    console.log("Processing...");
    axios.get(apiUrl).then(fetchJokes);
  }
  
  let jokeButtonElement = document.querySelector("#joke-button");
  jokeButtonElement.addEventListener("click", clicked);
  