const newQuote = document.querySelector('.newQuote');
const url = 'https://andruxnet-random-famous-quotes.p.mashape.com/';
const headers = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
  'X-Mashape-Key': 'pULfj53G2cmshTOYMVswroUxQXOFp1XKvibjsnMGH80M08e1Di',
  Accept: 'application/json',
});

// function to get quote from API using fetch
function getQuote() {
  fetch(url, { headers })
    .then(response => response.json())
    .then(data => displayQuote(data.quote, data.author))
    .catch(err => console.log(`An error: ${err} occured`));
}

// function to display quote
function displayQuote(quote, author) {
  const quoteText = document.querySelector('.quote');
  const authorText = document.querySelector('#author');
  const tweetQuote = document.querySelector('.tweet');

  quoteText.textContent = quote;
  authorText.textContent = author;

  tweetQuote.setAttribute('href', `https://twitter.com/intent/tweet?text=${quote}-${author}`);
}

newQuote.addEventListener('click', getQuote);
getQuote();
