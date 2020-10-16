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

var pupImagesArray = [
    '/Users/drewbradley/interactive-practice/pics/pup1.jpg',
    '/Users/drewbradley/interactive-practice/pics/pup2.jpg',
    '/Users/drewbradley/interactive-practice/pics/pup3.jpg',
    '/Users/drewbradley/interactive-practice/pics/pup4.jpg',
    '/Users/drewbradley/interactive-practice/pics/pup5.jpg'
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

var button = document.querySelector('.button');
var pupButton = document.querySelector('.pup-button');

function randomIndex(array){
    return Math.floor(Math.random() * array.length);
};

var mainFrame = document.querySelector('.main-frame');
var pupperMain = document.querySelector('.puppy-main')

function catShuffle() {
    var randomCatPoster = {
        img: imagesArray[randomIndex(imagesArray)],
        title: titleArray[randomIndex(titleArray)],
        quote: quotesArray[randomIndex(quotesArray)]
    };
    mainFrame.innerHTML = 
        `<img class="image" src="${randomCatPoster.img}" alt="">
        <h1 class = 'title'>${randomCatPoster.title}</h1>
        <p class="paragraph">${randomCatPoster.quote}</p>`;
    mainFrame.style.display = 'block';
    pupperMain.style.display = 'none';
}

function dogShuffle() {
    var randomDogPoster = {
        img: pupImagesArray[randomIndex(pupImagesArray)],
        title: pupTitleArray[randomIndex(pupTitleArray)],
        quote: pupQuotesArray[randomIndex(pupQuotesArray)]
    };
    pupperMain.innerHTML = 
        `<img class="image" src="${randomDogPoster.img}" alt="">
        <h1 class = 'title'>${randomDogPoster.title}</h1>
        <p class="paragraph">${randomDogPoster.quote}</p>`;
    mainFrame.style.display = 'none';
    pupperMain.style.display = 'block';
}


catShuffle();
button.addEventListener("click", catShuffle);


dogShuffle();
pupButton.addEventListener("click", dogShuffle);