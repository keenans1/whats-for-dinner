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
    console.log('hi');
}