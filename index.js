// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then((result) => {

//         if (!result.ok) {
//             throw new Error("Could not fetch resource")
//         }
//         return result.json()
//         .then((data) => {
//           console.log(data.weight/*.name, .id*/)
//         })
//     })
//     .catch((err) => {
//         console.error(err)
//     });

fetchData();

async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new error("Could not fetch resource");
        }
        const data = await response.json();
        console.log(data)
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch (error) {
        console.error(error);
    }
}