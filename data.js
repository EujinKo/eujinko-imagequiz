
let quiz1 = {
    number: 0,
    quizzes: [
        {
            imgSrc: './quiz_images/Bird.jpg',
            answer: 'Bird',
            choices: ['Bird','Cat','Zebra','Book']
        },
        {
            imgSrc: './quiz_images/Book.jpg',
            answer: 'Book',
            choices: ['Zebra','Mouse','Book','Clock']
        },
        {
            imgSrc: './quiz_images/Cat.jpg',
            answer: 'Cat',
            choices: ['Dog','Cat','Zebra','Otter']
        },
        {
            imgSrc: './quiz_images/Tiger.jpg',
            answer: 'Tiger',
            choices: ['Otter','Squirrel','Rabbit','Tiger']
        },
        {
            imgSrc: './quiz_images/Wallet.jpg',
            answer: 'Wallet',
            choices: ['Wallet','Squirrel','Rabbit','Coffee']
        },
        {
            imgSrc: './quiz_images/Zebra.jpg',
            answer: 'Zebra',
            choices: ['Otter','Squirrel','Zebra','Coffee']
        }
    ]
};

let quiz2 = {
    number: 1,
    quizzes: [
        {
            imgSrc: './quiz_images/Clock.jpg',
            answer: 'Clock',
            choices: ['Bird','Cat','Clock','Otter']
        },
        {
            imgSrc: './quiz_images/Coffee.jpg',
            answer: 'Coffee',
            choices: ['Bird','Bird','Clock','Coffee']
        },
        {
            imgSrc: './quiz_images/Dog.jpg',
            answer: 'Dog',
            choices: ['Dog','Cat','Zebra','Coffee']
        },                {
            imgSrc: './quiz_images/Raccoon.jpg',
            answer: 'Raccoon',
            choices: ['Raccoon','MusicBox','Rabbit','Coffee']
        },
        {
            imgSrc: './quiz_images/Slipper.jpg',
            answer: 'Slipper',
            choices: ['Otter','MusicBox','Rabbit','Slipper']
        },
        {
            imgSrc: './quiz_images/Squirrel.jpg',
            answer: 'Squirrel',
            choices: ['Otter','Squirrel','Rabbit','Coffee']
        }
    ]
};

let quiz3 = {
    number: 2,
    quizzes: [
        {
            imgSrc: './quiz_images/Duck.jpg',
            answer: 'Duck',
            choices: ['Dog','Otter','Zebra','Duck']
        },
        {
            imgSrc: './quiz_images/Globe.jpg',
            answer: 'Globe',
            choices: ['Dog','Cat','Globe','Coffee']
        },
        {
            imgSrc: './quiz_images/Light.jpg',
            answer: 'Light',
            choices: ['Light','Cat','Zebra','Coffee']
        },
    ]
};
let quiz4 = {
    number: 3,
    quizzes: [
        {
            imgSrc: './quiz_images/Lion.jpg',
            answer: 'Lion',
            choices: ['Light','Cat','Zebra','Lion']
        },
        {
            imgSrc: './quiz_images/Monkey.jpg',
            answer: 'Monkey',
            choices: ['Light','Monkey','Zebra','Coffee']
        },
        {
            imgSrc: './quiz_images/Mouse.jpg',
            answer: 'Mouse',
            choices: ['Mouse','Cat','Zebra','Coffee']
        },                {
            imgSrc: './quiz_images/MusicBox.jpg',
            answer: 'MusicBox',
            choices: ['Mouse','Cat','MusicBox','Coffee']
        },
        {
            imgSrc: './quiz_images/Otter.jpg',
            answer: 'Otter',
            choices: ['Otter','MusicBox','Zebra','Coffee']
        },
        {
            imgSrc: './quiz_images/Parrot.jpg',
            answer: 'Parrot',
            choices: ['Mouse','Cat','Zebra','Parrot']
        }
    ]
};


let quizzes = [quiz1,quiz2,quiz3,quiz4];

let scores = [{quizid:0,score:0},
    {quizid:1,score:0},
    {quizid:2,score:0},
    {quizid:3,score:0}];


module.exports.scores = scores;
module.exports.quizzes = quizzes;