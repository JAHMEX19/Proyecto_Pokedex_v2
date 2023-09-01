import {toggleMenu,activarLink} from "./toggleMenu.js";

import { getData } from "./asyncGetData.js";

import { getPokemonGens } from "./pokemonGens.js";

import buscar from "./busqueda.js";



const $list = document.querySelectorAll('.list')


document.addEventListener("DOMContentLoaded", (e)=> {
  
toggleMenu('.menuToggle','.navigation');

activarLink();

getPokemonGens();

buscar('#buscador');

}); 
/*
const $tarjeta = document.querySelectorAll(".item");

document.addEventListener("click", (e) => {
	console.log($tarjeta);
	if (e.target.matches(".item") || e.target.matches(`.pokeimage`)) {
	}
});


let numberType = 1;
let endpointTypes=`https://pokeapi.co/api/v2/type/${numberType}`
	const types = await getData(endpointTypes);

let numberGens = 1;
let endpointGens=`https://pokeapi.co/api/v2/generation/${numberGens}`


const generacion =await getData(endpointGens);


console.log(generacion)
console.log(types)
*/

