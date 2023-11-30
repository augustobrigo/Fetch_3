window.onload=inicio;
function inicio(){
    obtenerPaises();
    obtenerDeportes();
    obtenerEquipos();
}
async function obtenerPaises(){
    console.log("entro en datos")
    const url=" https://www.thesportsdb.com/api/v1/json/3/all_countries.php";
    var headers = {}
   
    const objeto= await fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })
    try{

   
    const data = await objeto.json();
    console.log(data);
    let contenedor=document.getElementById("pais");
    for (let i=0;i<data.countries.length;i++)
    contenedor.innerHTML+=
    `
    <div>
    <option value=${data.countries[i].name_en}>${data.countries[i].name_en}</option>
    
     </div>
    `
    }catch(error){
        alert(error);
    }
}
async function  obtenerDeportes(){
    console.log("entro en datos")
    const url=" https://www.thesportsdb.com/api/v1/json/3/all_leagues.php";
    var headers = {}
    const response= await fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })
    try{

   
    const data = await response.json();
    console.log(data);
    let contenedor=document.getElementById("liga");
    for (let i=0;i<data.leagues.length;i++)
    contenedor.innerHTML+=
    `
    <div>
    <option value=${data.leagues[i].strLeague}>${data.leagues[i].strLeague}</option>
    
     </div>
    `
    }catch(error){
        alert(error);
    }
}

async function obtenerEquipos(){
    console.log("entor en datos")
    const url="https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=Soccer&c=Spain";
    var headers = {}
   
    const response= await fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })
    try{

   
    const data = await response.json();
    console.log(data);
    let contenedor=document.getElementById("contenido");
    for (let i=0;i<data.teams.length;i++)
    contenedor.innerHTML+=
    `
    <div>
    <img src="${data.teams[i].strTeamBadge}" width="200px"/>
     <p>${data.teams[i].strTeam}</p>
     </div>
    `
    }catch(error){
        alert(error);
    }
}