
function API(){
    let url ='https://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinaria/rutina2019';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            console.log(json.rutina2019S);
        });
let url ='https://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinari/diccionario';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            console.log(json.rutina2020S);
        });

let url ='https://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinaria/cie10';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            console.log(json.rutina2021S);
        });

let url ='https://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinaria/davipola';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            coole.log(json.rutina2022S);
        });
    return(
        <>

        </>
    )
}

export default API;
