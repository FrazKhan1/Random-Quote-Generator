const quotes = [
  {
    name: "Dalai Lama",
    quote: "“The purpose of our lives is to be happy.” ",
  },
  {
    name: "john Lennon",
    quote: "“Life is what happens when you’re busy making other plans.” ",
  },
  {
    name: "Stephen King",
    quote: "“Get busy living or get busy dying.” ",
  },
  {
    name: "Mae West",
    quote: "“You only live once, but if you do it right, once is enough.” ",
  },
  {
    name: "Thomas A. Edison",
    quote:
      "“Many of life’s failures are people who did not realize how close they were to success when they gave up.” ",
  },
  {
    name: "Albert Einstein",
    quote:
      "“If you want to live a happy life, tie it to a goal, not to people or things.” ",
  },
];

let generateBtn = document.querySelector(".button");
let authorBody = document.querySelector(".quotebody");
let authorName = document.querySelector(".quoteAuthor");

generateBtn.addEventListener("click", displayQuote);
function displayQuote() {
  let number = Math.trunc(Math.random() * quotes.length);
  authorBody.innerHTML = quotes[number].quote;
  authorName.innerHTML = quotes[number].name;
}
