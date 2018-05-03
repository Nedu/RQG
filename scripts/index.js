const newQuote = document.querySelector('.newQuote');
const url = 'https://andruxnet-random-famous-quotes.p.mashape.com/';
const headers = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
  'X-Mashape-Key': 'pULfj53G2cmshTOYMVswroUxQXOFp1XKvibjsnMGH80M08e1Di',
  Accept: 'application/json',
});

// Get quote from API using fetch
async function getQuote() {
  const res = await fetch(url, { headers });
  const data = await res.json();
  return [data.quote, data.author];
}

// Display quote
async function displayQuote() {
  const [quote, author] = await getQuote();
  const quoteText = document.querySelector('.quote');
  const authorText = document.querySelector('#author');
  const tweetQuote = document.querySelector('.tweet');

  quoteText.textContent = quote;
  authorText.textContent = author;

  tweetQuote.setAttribute('href', `https://twitter.com/intent/tweet?text=${quote}-${author}`);
}

newQuote.addEventListener('click', displayQuote);
displayQuote();
