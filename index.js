const lolcatjs = require('lolcatjs');
const moment = require('moment');
const quotes = require('./quotes');

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

const generateQuote = () => {
  lolcatjs.fromString('Welcome to the Ryan quote generator...\n');
  setTimeout(() => {
    lolcatjs.fromString('Picking out an extra special quote just for you.\n\n');
    setTimeout(() => {
      let index = randomIntFromInterval(0, quotes.best_quotes.length - 1);
      let quote = quotes.best_quotes[index];
      let date = moment(quote.date).format("MMM Do YYYY - hh:mm");
      lolcatjs.fromString('==========================================\n');
      lolcatjs.fromString('" ' + quote.text + ' "');
      lolcatjs.fromString('\n\n-- Ryan Sloane, ' + date);
      lolcatjs.fromString('\n==========================================');
      process.exit(0)
    }, 1500);
  }, 1500);
}

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

generateQuote();