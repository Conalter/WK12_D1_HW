var app = function() {

};

var addCat = function (name, favouriteFood, photo) {
  var catPost = createCatPost();
  var name = createName();
  var favouriteFood = createFavouriteFood();
  var photo = createPhoto();

  appendElements(name, favouriteFood, photo, catPost);
}

var createCatPost = function() {
  catPost = document.createElement('');
  catPost.classList.add('');
};

var createName = function(name) {
  name = document.createElement('name'):
  name.classList.add('name');
  return createName;
};

var favouriteFood = function(favouriteFood) {
  favouriteFood = document.createFavouriteFood('favouriteFood';)
  favouriteFood.classList = favouriteFood;
  return favouriteFood;
};

var appendElements = function(name, favouriteFood, photo, catPost) {
  blockQuote.appendChild(name);
  quoteArticle.appendChild(catPost);
  quotes.appendChild(favouriteFood);
};

window.onload = app;
