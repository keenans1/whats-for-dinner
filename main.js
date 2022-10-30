var sides = [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies'
];

var mains = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza'
];

var desserts = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs'
];

// query selectors

var menuItemDisplayed = document.getElementById('menu-item-displayed');

var letsCookButton = document.getElementById('lets-cook-button');
var clearButton = document.getElementById('clear-button');

var side = document.getElementById('side');
var mainDish = document.getElementById('main-dish');
var dessert = document.getElementById('dessert');
var entireMeal = document.getElementById('entire-meal');

var potImage = document.querySelector('.pot');
var displayedMenuResult = document.getElementById('user-menu-item');

var viewAllRecipesButton = document.getElementById('view-all-recipes-button');

var sidesList = document.getElementById('sides-list');
var mainsList = document.getElementById('mains-list');
var dessertsList = document.getElementById('desserts-list');

var section1 = document.getElementById('section-1');
var section2 = document.getElementById('section-2');

//event listeners

letsCookButton.addEventListener('click', showMenuItem);
clearButton.addEventListener('click', clearDish);
viewAllRecipesButton.addEventListener('click', showAllRecipes);

//event handlers

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function showMenuItem() {

    if (side.checked || mainDish.checked || dessert.checked || entireMeal.checked) {
        potImage.classList.add('hidden');
        displayedMenuResult.classList.remove('hidden');
    }

    var randomSideNum = getRandomIndex(sides);
    var randomMainNum = getRandomIndex(mains);
    var randomDessertNum = getRandomIndex(desserts);

    if (side.checked) {
        menuItemDisplayed.innerText = sides[randomSideNum];
    } else if (mainDish.checked) {
        menuItemDisplayed.innerText = mains[randomMainNum];
    } else if (dessert.checked) {
        menuItemDisplayed.innerText = desserts[randomDessertNum];
    } else if (entireMeal.checked) {
        menuItemDisplayed.innerText = `${mains[randomMainNum]} with a side of ${sides[randomSideNum]} and ${desserts[randomDessertNum]} for dessert!`;
    } else {
        alert('Must select a menu category first!');
    }
}

function clearDish() {
    menuItemDisplayed.innerText = '';
    potImage.classList.remove('hidden');
    displayedMenuResult.classList.add('hidden');
}

function showAllRecipes() {

    section1.classList.add('hidden');
    section2.classList.remove('hidden');


    for (var i = 0; i < sides.length; i++) {
        sidesList.innerHTML += `<i class="fa-solid fa-trash-can"></i> <li style="list-style: none;">${sides[i]}</li>`;
    }

    for (var i = 0; i < mains.length; i++) {
        mainsList.innerHTML += `<li style="list-style: none;">${mains[i]}</li>`;
    }

    for (var i = 0; i < desserts.length; i++) {
        dessertsList.innerHTML += `<li style="list-style: none;">${desserts[i]}</li>`;
    }
}

// separate stuff

