$('h2').css('visibility', 'hidden');

var show = function() {
  $('.vote').hide();
  $('h2').css('visibility', 'visible');
}
//$('h2').css('visibility', 'hidden');

/*
function twitter() {
  var quote = quotes[number].quote;
  var author = quotes[number].author;

  var twitter = "https://twitter.com/intent/tweet?text=";
  var quoteLink = text2link(quote);
  var authorLink = "%20 -" + text2link(author)
  //atLink = "%20%40aaaabbbb";
  //url = "&url=http%3A%2F%2Faaaabbbb.com/quote/103";
  //hashtag = "&hashtags=dontdie";
  if(quote.length + author.length + 2 > 140) {
    var url = twitter + quoteLink;
  } else {
    var url = twitter + quoteLink + authorLink;
  }
  window.open(url, '_blank');
  //win.focus();
  //win.close();
}
*/
