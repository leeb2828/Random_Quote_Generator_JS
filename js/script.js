/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
Student: L Haney
******************************************/
var quotes = [
   {
      /* Quote taken from http://www.cutandjacked.com/Best-Of-
Joe-Rogan-Quotes-Photos-Clips*/
      quote: 'The two things I understand best are stand-up comedy and martial\
 arts. And those things require an ultimate grasp of the truth. You have to be\
 objective about your skills and abilities to compete in both.',
      source: 'Joe Rogan',
   },
   {
      // Quote taken from https://www.goodreads.com/quotes/579594-every-villain-is-a-hero-in-his-own-mind
      quote: 'Every villian is a hero in his own mind.',
      source: 'Tom Hiddleston',
   },
   {
      quote: 'If you want one thing too much it’s likely to be a \
disappointment. The healthy way is to learn to like the everyday things, like \
soft beds and buttermilk—and feisty gentlemen.',
      source: 'Larry McMurtry',
      citation: 'Lonesome Dove',
      year: '1985',
   },
   {
      quote: "If you can't understand why someone is doing something, look \
at the consequences of their actions, whatever they might be, and then infer \
the motivations from their consequences.",
      source: 'Jordan Peterson',
      citation: 'Twitter',
      year: '2018',
   },
   {
      // Quote taken from https://www.goodreads.com/quotes/8781697-you-don-t-get-to-choose-not-to-pay-a-price
      quote: "You don't get to choose not to pay a price, you only get to \
choose which price you pay",
      source: 'Jordan Peterson',
      year: 'Unknown year',
   }
];

/*
Input: Parameter is the entire 'quotes' object array

Returns: One object from the 'quotes' object array

Behavior: Takes in object array, uses a random number to
          select one object from the 'quotes' object array
 */
function getRandomQuote(quotes) {
   var random_number = Math.floor(Math.random() * 5);
   var random_object = quotes[random_number];

   return random_object;
}


/*
Input: None.

Returns: None.

Behavior:
   Step one: Calls on the getRandomQuote() method to retrieve one quote object from the
   'quotes' object array.

   Step two: Tests if the quote object has any year or citation properties.

   Step three: All the properties the quote object has is included in the final HTML
   content for the "quote-box" div element in the index.html file.
 */
function printQuote() {
   // random_quote is initialized & contains one quote object
   var random_quote = getRandomQuote(quotes);

   var quote_and_source = '<p class=\"quote\">' + random_quote.quote + '</p><p class=\"source\">' + random_quote.source + '</p>';
   var year = '<span class=\"year\">' + random_quote.year + '</span>';
   var citation = '<span class=\"citation\">' + random_quote.citation + '</span>';

   // Check for the year property in the quote object
   if ((random_quote.year) && (!random_quote.citation)) {
      quote_and_source = '<p class=\"quote\">' + random_quote.quote + '</p><p class=\"source\">' + random_quote.source + year + '</p>';
   }
   // Check for the citation property in the quote object
   else if ((!random_quote.year) && (random_quote.citation)) {
      quote_and_source = '<p class=\"quote\">' + random_quote.quote + '</p><p class=\"source\">' + random_quote.source + citation + '</p>';
   }
   // Check for the year and citation properties in the quote object
   else if ((random_quote.year) && (random_quote.citation)) {
      quote_and_source = '<p class=\"quote\">' + random_quote.quote + '</p><p class=\"source\">' + random_quote.source + citation + year + '</p>';
   }

   document.getElementById('quote-box').innerHTML = quote_and_source;
}

/*
Calls on the printQuote() function when "Show another quote" button
is clicked (in the index.html file).
*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
