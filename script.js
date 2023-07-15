let button = document.getElementById("btn");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
//not sure why document.querySelector works, but document.getElementByClassName does not.  Need to brush up.

let quotes = [
  {
    quote: "I'm not here to be perfect, I'm here to be real.",
    source: "Lady Gaga",
  },
  {
    quote: "I'm not interested in money. I just want to be wonderful.",
    source: "Marilyn Monroe",
  },
  {
    quote:
      "The only thing that feels better than winning is winning when nobody thought you could.",
    source: "Hank Aaron",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts",
    source: "Winston Churchill",
  },
  {
    quote: "If you want something done, ask a busy person to do it.",
    source: "Laura Ingalls Wilder",
  },
  {
    quote:
      "The most important thing is to enjoy your life - to be happy - it's all that matters.",
    source: "Steve Jobs",
  },
  {
    quote: "They don't think it be like it is, but it do.",
    source: "Oscar Gamble",
  },
];

button.addEventListener("click", getQuote);

function getQuote() {
  let x = Math.floor(Math.random() * quotes.length);
  console.log(`Quote: "${quotes[x].quote}" author: ${quotes[x].source}`);
  quote.textContent = `"${quotes[x].quote}"`;
  author.textContent = `${quotes[x].source}`;
}
