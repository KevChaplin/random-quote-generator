var quotesArr = []
var text = ""
var author = ""
var quoteIndex = ""
var tweetText = ""

function updateAll() {
  quoteIndex = Math.floor(Math.random() * quotesArr.length)
  text = '"'+quotesArr[quoteIndex].text+'"'
  author = quotesArr[quoteIndex].author
  tweetText = text+' - '+author
  tweetHref = "https://twitter.com/intent/tweet?text="+encodeURI(tweetText)
  $(document).ready(function(){
    $("#quote-box").hide().fadeIn(1000);
    $("#text").html(text).hide().fadeIn(3000);
    $("#author").html(author).hide().fadeIn(5000);
    $("#tweet-quote").attr("href", tweetHref)
  })
}

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    quotesArr = [...response]
    updateAll()
  });
