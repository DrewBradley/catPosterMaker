var imagesArray = [
    '/Users/drewbradley/interactive-practice/pics/cat1.png',
    '/Users/drewbradley/interactive-practice/pics/cat2.jpeg',
    '/Users/drewbradley/interactive-practice/pics/cat3.jpeg',
    '/Users/drewbradley/interactive-practice/pics/cat4.jpeg',
    '/Users/drewbradley/interactive-practice/pics/cats5.jpg'
];

var titleArray = [
    "LOOK AT THAT CAT!",
    "COME GET THIS CAT!",
    "I LOVE CATS SO MUCH!",
    "YOU SHOULD BE A CAT!",
    "CAT! CAT! CATS! CATS!"
];

var quotesArray = [
    "cat's are like fuzzy angels",
    "cat's rule, and so do dogs",
    "if you were a cat, i'd like you",
    "don't trust the government. trust cats.",
    "cat's are worthy of love and respect."
]

var button = document.querySelector(".button");

function randomIndex(array){
    return Math.floor(Math.random() * array.length);
};

var mainFrame = document.querySelector('.main-frame');

function workDammit() {
    var randomCatPoster = {
        img: imagesArray[randomIndex(imagesArray)],
        title: titleArray[randomIndex(titleArray)],
        quote: quotesArray[randomIndex(quotesArray)]
    };
    mainFrame.innerHTML = 
`<img class="image" src="${randomCatPoster.img}" alt="">
<h1 class = 'title'>${randomCatPoster.title}</h1>
<p class="paragraph">${randomCatPoster.quote}</p>`;
console.log('AAAHHHHHHHH!!!!!')
}
workDammit();
button.addEventListener("click", workDammit);