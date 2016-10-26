
function showCarnivores (carnivores) {
	carnivores.forEach( function(carney) {
		document.getElementById("carnies").innerHTML += "<h2>" + carney.name + "</h2>";
	});
}

function showHerbivores (herbivores) {
	herbivores.forEach( function(herby) {
	document.getElementById("herbies").innerHTML += "<h2>" + herby.name + "</h2>";
	});
}
Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);