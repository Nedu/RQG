const newQuote = document.querySelector('.newQuote');
const base = 'https://andruxnet-random-famous-quotes.p.mashape.com/';
const myHeaders = new Headers({
	'Content-Type': 'application/x-www-form-urlencoded',
	'X-Mashape-Key': 'pULfj53G2cmshTOYMVswroUxQXOFp1XKvibjsnMGH80M08e1Di',
	Accept: 'application/json'
})

function getQuote() {
	fetch(base, {headers: myHeaders})
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			displayQuote(data.quote, data.author);
			// displayAuthor(data.author);
		})
		.catch(function () {
			console.log('An error occured');
		});
}

function displayQuote(quote, author) {
	const quoteText = document.querySelector('.quote');
	const authorText = document.querySelector('#author');
	const tweetQuote = document.querySelector('.tweet');
	const a = quote + " - " + author;;
	
	quoteText.textContent = quote;
	authorText.textContent = author;
	
	tweetQuote.setAttribute('href', `https://twitter.com/intent/tweet?text=${a}`);
	// tweetQuote.setAttribute('data-text', `${quote} - ${author}`);
}

// function displayAuthor(author) {
// 	const authorText = document.querySelector('#author');
// 	authorText.textContent = author;
// }

newQuote.addEventListener('click', getQuote);
getQuote();