import { getData } from "./asyncGetData.js";

export function getPokemonGens() {

    //Img Observer
    const imgOptions = {};
	const imgObserver = new IntersectionObserver((entries, imgObserver) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;
			const img = entry.target;
			var dataImage = img.getAttribute("data-image");
			img.src = dataImage;
			imgObserver.unobserve(img);
		});
	}, imgOptions);

/***************************************************************************** */

	//Funcion Async para destructurar y ordenar la informacion
	async function getPokemons(numero, toggle) {
		const endpoint = `https://pokeapi.co/api/v2/generation/${numero}/`;
		const $container = document.querySelector(".container");
		const $fragment = document.createDocumentFragment();

		$container.innerHTML = "";
		let pokemons = [];

		pokemons = await getData(endpoint);
		const pokemonsGens = pokemons.pokemon_species;
		
		//console.log(pokemonsGens)
		
		//Asignacion de propiedad id y ordernamiento metodo sort
		for (let j = 0; j < pokemonsGens.length; j++) {
			pokemonsGens[j].id = order(pokemonsGens[j].url);
		}
		pokemonsGens.sort((a, b) => a.id - b.id);

		//console.log(pokemons);

		/******************************************************** 
		const types = [];
		const pokemonTypes = await getData(pokemons.types[0].url);*/

	
		/************************************************************************* */
		pokemonsGens.forEach((item) => {
			const $pokeCard = document.createElement("li");
			
			$pokeCard.classList.add("item");
			$pokeCard.innerHTML =` <div >
						
            <h3 >No. ${item.id}</h3>
                     
            </div>${(item.name).toUpperCase()}`;
            
            //$pokeCard.classList.add(`id=${item.id}`) <h3>${item.name.toUpperCase()}</h3>
			$container.appendChild($pokeCard);

			//$container.appendChild($fragment);

		/********************************************************* */
			let numberDecimales = order(item.url);
			if (numberDecimales < 10) {
				numberDecimales = "0" + numberDecimales;
			}
			if (numberDecimales < 100) {
				numberDecimales = "0" + numberDecimales;
			}
			var img = new Image();

			const toggleurl = "https://www.serebii.net/pokemongo/pokemon/";
			img.src =
				"https://media3.giphy.com/media/ycfHiJV6WZnQDFjSWH/200w.webp?cid=ecf05e475dloff2zdjxto69agv6hm0lxml7ej5431pe8qrk7&ep=v1_gifs_search&rid=200w.webp&ct=g";

			//url de imagen url + decimales
			const urlImage = `${toggleurl}${numberDecimales}.png`;

			img.setAttribute("data-image",urlImage); 
			img.setAttribute("class", "pokeimage"); 
			img.setAttribute("alt", item.name); 
            imgObserver.observe(img);
			$pokeCard.appendChild(img);
           // console.log($pokeCard)
			
		});
	}

	//Funcion ordenar 
	function order(url) {
		const mySubString = url.substring(
			url.lastIndexOf("s/") + 2,
			url.lastIndexOf("/")
		);
		return mySubString;
	}

	/************************************************************************ */
	//Default generation
	let defaultGen = 1;
	getPokemons(defaultGen);
	let toggle = false;

	const $filter = document.querySelector(".filters");

	let gen = "";
	const generation = [
		"Gen-01",
		"Gen-02",
		"Gen-03",
		"Gen-04",
		"Gen-05",
		"Gen-06",
		"Gen-07",
	];

	for (let i = 0; i < generation.length; i++) {
		gen += `<input class="radio-gens" type="radio" id=${generation[i]} value=${
			i + 1
		} name="generation" checked><label for=${
			generation[i]
		} class="label-gen"> ${generation[i]} </label>`;
	}

	$filter.innerHTML = gen;

	$filter.addEventListener("click", function (e) {
		if (e.target.type == "radio") {
			console.log(
				` Value:${e.target.value} Type:${e.target.type} Toggle:${toggle}`
			);
			//Imprimir
			getPokemons(e.target.value, toggle);
		}
	});
}
