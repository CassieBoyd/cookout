const hamburger = {
    name: 'Hamburger',
    type: 'beef',
    cooked: false,
}
const zucchini = {
    name: 'Zucchini',
    type: 'vegetable',
    cooked: false,
}
const chickenBreast = {
    name: 'Chicken Breast',
    type: 'chicken',
    cooked: false,
}
const corn = {
    name: 'Corn',
    type: 'vegetable',
    cooked: false,
}
const steak = {
    name: 'Steak',
    type: 'beef',
    cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill(currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

// For each method executes grill function on foods array causing it to be cooked.
foods.forEach(grill);



// For loop loops through cookedFood array and logs a string to the console if the cooked key = true,
// else, we die of salmonella.
for (i = 0; i < cookedFood.length; i++) {
    if (cookedFood[i].cooked == true) {
    console.log(`The ${cookedFood[i].name} is cooked, let's eat!`)
    } else {
        console.log(`The wagon wheel broke and we died of salmonella!`)
} 
}
