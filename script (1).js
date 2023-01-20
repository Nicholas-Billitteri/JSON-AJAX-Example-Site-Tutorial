var myCat = {
}
"name": "Meowsalot",
  "species" "cat", "favFood": "tuna"
var myFavColors = ["blue", "green", "purple"];
var thePets = [
  {
    "name": "Meowsalot",
    "species" "cat",
    "favFood": "tuna"
  },
  {
    "name": "Barky",
    "species": "dog",
    "favFood": "carrots"
  }
]
thePets[1].favFood

var pageCounter = 1;
var animal Container = document.getElementById("animal-info"); var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest(); our Request.open('GET',
    'https://learnwebcode.github.io/json-example/animals
ourRequest.onload = function() {
    };
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var ourData = JSON.parse(ourRequest.responseText);
renderHTML CourData);
} else {
}
console.log("We connected to the server, but it returned an error.");
ourRequest.onerror
  =
  function() {
    console.log("Connection error");
    IS

    ourRequest.send(); pageCounter++;
    if (pageCounter > 3) {
      btn.classList.add("hide-me");
    }
  });
function renderHTML(data) {
  var htmlString = "";
  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + that
    for (ii = 0; i < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
      }
      htmlString += " and " data[i].foods.likes[ii];

      var pageCounter = 1;
      var animal Container = document.getElementById("animal-info"); var btn = document.getElementById("btn");
      btn.addEventListener("click", function() {
        var ourRequest = new XMLHttpRequest());
our Request.open('GET',
          'https://learnwebcode.github.io/json-example/animals
ourRequest.onload = function() {
          };
      var ourData = JSON.parse(our Request.responseText); renderHTML CourData);
      ourRequest.send(); pageCounter++;
      if (pageCounter > 3) {
        btn.classList.add("hide-me");
      }
    });

    function renderHTML(data) {
      var htmlString = "";
      for (i = 0; i < data.length; i++) {
      }
      htmlString += "<p>" + data[i].name + " is a " + data[i].species

    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);