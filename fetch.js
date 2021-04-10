console.warn('fetch');

const getJokes = () => (
  fetch('https://official-joke-api.appspot.com/jokes/ten')
    .then((response) => response.json())
    .then((data) => data)
);

async function joker() {
  const jokes = await getJokes();

  jokes.forEach((joke, i) => {
    document.querySelector('#app').innerHTML += `
    <div class="card ${i === 2 ? 'grow' : ''}">
      <div class="card-body">
        <h5 class="card-title">${joke.setup}</h5>
        <p class="card-text">${joke.punchline}</p>
      </div>
    </div>`;
  });
}

joker();

// getJokes().then((response) => console.warn(response));
