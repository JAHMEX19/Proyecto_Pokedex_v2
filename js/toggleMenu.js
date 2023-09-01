export function toggleMenu (btntoggle,elemento){
//import { getData } from "./asyncGetData";
document.addEventListener('click',(e) =>{
	if (e.target.matches(btntoggle) || e.target.matches(`${btntoggle} *`)) {
		console.log(e);
		document.querySelector(elemento).classList.toggle("open");
	}
})

}

export function activarLink() {

	const $list = document.querySelectorAll(".list");
	
	function activarLink() {
		$list.forEach((item) => {
			item.classList.remove("active");
			
		});

		this.classList.add("active"); 
		return(this.value)
	}
	
	$list.forEach((item) => {
		item.addEventListener("click", activarLink);
			
	});

}


