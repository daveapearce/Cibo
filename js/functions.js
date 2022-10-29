const totalRecipes = RecipeArray.length;
const menuContainer = document.getElementById("recipe-card-grid");
const recipePage = document.getElementById("recipe-page");

function countRecipes() {
    console.log("There are currently " + totalRecipes + " recipies in your recipe book");
};

function populateMainPage() {
    for (let i = 0; i < RecipeArray.length; i++) {
        //console.log(RecipeArray[i]);
        menuContainer.innerHTML +=
        '<div class="recipe-card" onClick=updateRecipePage("' + i + '")>' +
        '<img class="thumbnail" src="' + RecipeArray[i].ThumbnailLocation + '">' +
        '<h1>' + RecipeArray[i].Title + '</h1>' +
        '<span class="veg-label"><span>' + 
        '</div>'
        ;
    };
}

function updateRecipePage(i) {
    // Update Title
    document.getElementById("recipe-page-title").innerHTML = (RecipeArray[i].Title);
    // Update Ingrdient List
    createIngredientsList(i);
    // Update Method
    createMethodContent(i);
    // Update Image
    document.getElementById("recipe-page-image").style.backgroundImage = 'url(' + (RecipeArray[i].PhotoLocation) + ')';
    // Display Recipe Page
    showRecipePage();
}

function createIngredientsList(i) {
    //Clear Ingrdients Container
    document.getElementById("recipe-page-ingredients").innerHTML = "";
    // Create List Item loop
    for (let ii = 0; ii < RecipeArray[i].Ingredients.length; ii++) {
        //console.log(RecipeArray[i].Ingredients[ii]);
        document.getElementById("recipe-page-ingredients").innerHTML += '<li>'+ (RecipeArray[i].Ingredients[ii]) + " <span class='quantity'>" + (RecipeArray[i].IngredientQuantity[ii]) + '</span>' + '</li>';
    };
}

function createMethodContent(i) {
    //Clear Method Container
    document.getElementById("recipe-page-method").innerHTML = "";
    // Create Method Item loop
    for (let iii = 0; iii < RecipeArray[i].Method.length; iii++) {
        console.log(RecipeArray[i].Ingredients[iii]);
        document.getElementById("recipe-page-method").innerHTML += '<div>' + '<span class="step-number">' + 'step ' + (iii+1) + '</span>' + (RecipeArray[i].Method[iii]) + '</div>';
    };
}

function showRecipePage() {
    recipePage.classList.add("showpage");
}

function hideRecipePage() {
    recipePage.classList.remove("showpage");
}

populateMainPage();