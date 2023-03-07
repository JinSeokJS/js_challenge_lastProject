const quotes = [
    {
      quote: "도전하는 즐거움을 통해 삶의 가치를 실현시켜라",
    },
    {
      quote: "당신의 운명이 결정되는 것은 결심하는 그 순간이다",
    },
    {
      quote: "위대한 업적은 대게 커다란 위험을 감수한 결과이다",
    },
];

const quote = document.querySelector("#quote span:first-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
