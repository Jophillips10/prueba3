
document.addEventListener("DOMContentLoaded", function(){

    // const DivObj = document.getElementById("Resultado");
    // fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    // .then(response => response.json())
    // .then(data =>  DivObj.innerText = JSON.stringify(data));

    const btnBuscar = document.getElementById("btnBuscar");
    btnBuscar.addEventListener("click", function() {
        LoadPokeAPI("bulbasaur");   
    });

});



 function LoadPokeAPI(NamePoke){
     const DivObj = document.getElementById("Resultado");
    //  fetch('https://pokeapi.co/api/v2/pokemon/${NamePoke}/')
    fetch(`https://pokeapi.co/api/v2/pokemon/${NamePoke}/`)
    .then(response => response.json())
   .then(data => DivObj.innerText = JSON.stringify(data));
 }

//console.log(data) 
//DivObj.innerText = data.name