const pokemonImg = document.getElementById("js--pokemon--img");
const pokemonNaam = document.getElementById("js--pokemon--naam");
const pokemoType = document.getElementById("js--pokemon--type");
const pokemonHeight = document.getElementById("js--pokemon--height");
const pokemonWeight = document.getElementById("js--pokemon--weight");
const pokemonDiv = document.getElementById("js--pokemon--div");
const pokemonSection = document.getElementById("js--pokemon--section");
const pokemonFooter = document.getElementsByTagName("footer")[0];
function pokemonInfoLoaden() {
  function rng() {
    let rng = Math.floor(Math.random() * 300 + 1);
    return rng;
  }
  {
    setTimeout(() => {
      for (let i = 0; i < 7; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + rng())
          .then(function (pokemoninfo) {
            return pokemoninfo.json();
          })
          .then(function (realpokemoninfo) {
            console.log(realpokemoninfo);
            pokemonImg.src = realpokemoninfo.sprites.front_default;
            pokemonNaam.innerText = "name: " + realpokemoninfo.species.name;
            pokemoType.innerText =
              "type: " + realpokemoninfo.types[0].type.name;
            pokemonHeight.innerText = "height: " + realpokemoninfo.height;
            pokemonWeight.innerText = "weight: " + realpokemoninfo.weight;

            const clone = pokemonDiv.cloneNode(true);
            pokemonSection.appendChild(clone);
          });
      }
    }, 500);
  }
}
const observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting == true) {
      pokemonInfoLoaden();
      setTimeout(() => {
        pokemonDiv.style.display = "flex";
      }, 450);
    } else {
    }
  },
  {
    threshold: 0.8,
  }
);

observer.observe(pokemonFooter);

function divClone() {
  const clone = pokemonDiv.cloneNode(true);
  pokemonSection.appendChild(clone);
}
pokemonInfoLoaden();
