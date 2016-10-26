 
var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "carnivores.json");
      loader.send();
      loader.addEventListener("load", function () {
      carnivores = JSON.parse(this.responseText).carnivores;
      callbackToInvoke(carnivores);
      });
    },
    loadHerbivores: function (callbackFun) {
    	loader = new XMLHttpRequest();
    	loader.open("GET", "herbivores.json");
    	loader.send();
    	loader.addEventListener("load", function () {
    	herbivores = JSON.parse(this.responseText).herbivores;
    	callbackFun(herbivores);
    	});
    }	
  };
})();