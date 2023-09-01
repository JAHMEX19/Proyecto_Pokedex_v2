export async function getData (endpoint){

    let data;
		try {
			const respuesta = await fetch(endpoint);
			data = await respuesta.json();
			
			
		} catch (error) {
			console.log(error);
		}
		return data;

}

