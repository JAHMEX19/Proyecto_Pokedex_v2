export default function buscar(buscador = "") {
    
	document.addEventListener("keyup", (e) => {
		if (e.target.matches(buscador)) {
			document.querySelectorAll(".item").forEach((elemento) => {
				console.log(elemento);

				elemento.textContent
					.toLowerCase()
					.includes(e.target.value.toLowerCase())
					? elemento.classList.remove("filtroBusqueda")
					: elemento.classList.add("filtroBusqueda");
			});

			console.log(e.target.value);
		}
	});
}
