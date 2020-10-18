var imagesArray = [
    './pics/cat1.png',
    './pics/cat2.jpeg',
    './pics/cat3.jpeg',
    './pics/cat4.jpeg',
    './pics/cats5.jpg'
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

var pupImagesArray = [
    './pics/pup1.jpg',
    './pics/pup2.jpg',
    './pics/pup3.jpg',
    './pics/pup4.jpg',
    './pics/pup5.jpg'
];

var pupTitleArray = [
    "LOOK AT THAT PUPPERS!",
    "COME GET THIS DOGGO!",
    "I LOVE PUPS SO MUCH!",
    "YOU SHOULD BE A DOGGO!",
    "WOOF! WOOF! DOG! DOG!"
];

var pupQuotesArray = [
    "who let the dogs out?",
    "dogs are man's best friend",
    "your dog misses you",
    "na na na na na it's the D-O-G!",
    "dog say bork bork bork."
]

function randomIndex(array){
    return Math.floor(Math.random() * array.length);
};

var mainFrame = document.querySelector('.main-frame');
var catImage = document.querySelector('.image');
var catTitle = document.querySelector('.title');
var catQuote = document.querySelector('.paragraph');
var button = document.querySelector('.button');
var pupButton = document.querySelector('.pup-button');

var formSection = document.querySelector(".form");
var formButton = document.querySelector('.form-button');
var imageInput = document.querySelector('.image-input');
var titleInput = document.querySelector('.title-input');
var quoteInput = document.querySelector('.quote-input');
var showPoster = document.querySelector('.show-poster');

function catShuffle() {
    var posterArray = [];
    posterArray.push(imagesArray[randomIndex(imagesArray)]);
    posterArray.push(titleArray[randomIndex(titleArray)]);
    posterArray.push(quotesArray[randomIndex(quotesArray)]);
    catImage.src = posterArray[0];
    catTitle.innerText = posterArray[1];
    catQuote.innerText = posterArray[2];
    console.log(posterArray);
    formSection.classList.add('hidden');
    mainFrame.classList.remove('hidden');
}

function dogShuffle() {
    var posterArray = [];
    posterArray.push(pupImagesArray[randomIndex(pupImagesArray)]);
    posterArray.push(pupTitleArray[randomIndex(pupTitleArray)]);
    posterArray.push(pupQuotesArray[randomIndex(pupQuotesArray)]);
    catImage.src = posterArray[0];
    catTitle.innerText = posterArray[1];
    catQuote.innerText = posterArray[2];
    formSection.classList.add('hidden');
    mainFrame.classList.remove('hidden');
}

function openForm() {
    mainFrame.classList.add('hidden');
    formSection.classList.remove('hidden');
}

function makePoster() {
    catImage.src = imageInput.value;
    catTitle.innerText = titleInput.value;
    catQuote.innerText = quoteInput.value;
    formSection.classList.add('hidden');
    mainFrame.classList.remove('hidden');
}

catShuffle();

button.addEventListener("click", catShuffle);
pupButton.addEventListener("click", dogShuffle);
formButton.addEventListener('click', openForm);
showPoster.addEventListener('click', makePoster);