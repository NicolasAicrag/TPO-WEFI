
/* ..."Para leer el Json y pasarlo a formato js"....
    let url = "./Merval/Json/Datos_cotizacion1.json"
    let datos = [];
    fetch(url)
        .then(response => response.json())
        .then(data => {  // data que contiene el JSON
            console.log(data)
            dataMerval = data.CotizCierre
            console.log(dataMerval)
*/
        

        let cad = `<div class="container">
                    <table>
                        <tr class="titulo_encabezado">
                            <th class="titulo_encabezado_logo">Logo</th>
                            <th class="titulo_encabezado_ticker">ticker</th>
                            <th class="titulo_encabezado_name">Especie</th>
                            <th class="titulo_encabezado_last">Precio</th>
                            <th class="titulo_encabezado_variac">Variación</th>
                        </tr>
                    </table>`;
        
          

        for (producto of dataMerval) {
            cad += `
            <div class="especie">
                <table>
                    <tr class="fila">
                        <td class="fila_logo"><img class="logo_img" src="${producto.imagen}"></td>
                        <td class="fila_ticker">${producto.ticker}</td>
                        <td class="fila_name">${producto.name}</td>
                        <td class="fila_last">${producto.last}</td>
                        <td class="fila_variac">${producto.variac}</td>
                    </tr>
                </table>   
            </div>`
           


        }


        cad += `</div>`

        document.getElementById("cotizaciones").innerHTML = cad;


        // para colorear variacion//
        colorVar = document.getElementsByClassName("fila_variac");
    

        for( i of colorVar){
            let varia = i.innerHTML;
            if(varia[0] === "-"){
                i.style.color ="red"
            }
                else if(varia === "0%"){
                    i.style.color ="blue"

                }
                else{
                    i.style.color = "green"
                }

    
        }

    















/*let cad=`<div class="container">`

for(elemento of data){

    cad+=`
        <div class="tarjeta">
            <img src="${elemento.image}" alt="foto">
            <div class="cuerpo">
                <h4>Nombre:${elemento.id} - ${elemento.name}</h4>
                <p>Genero:${elemento.gender}</p>
                <p>Especie:${elemento.species} </p>
            </div>
        </div>
    `
}
cad+=`

console.log(cad)

document.getElementById("tarjetas").innerHTML=cad

*/




















/*let cad=`<div class="container">       `
for( personaje of data){
    cad +=`
        <div class="tarjeta">
            <img src="${personaje.image}" alt="${personaje.name}">
            <div class="cuerpo">
                <h4>Nombre: ${personaje.name}</h4>
                <p>Genero:${personaje.gender}</p>
                <p>Especie:${personaje.species} </p>
            </div>
        </div>
    `    
}
cad+=`</div>          `
console.log(cad)
document.getElementById("fotos").innerHTML=cad;
*/














/*let cad=`<div class="container">
       `
for(personaje of data){  // data es un arreglo que contiene a los personajes
    cad+=`<div class="tarjeta">
            <img src="${personaje.image}" alt="${personaje.name}">
            <div class="cuerpo">
                <h4>Personaje:${personaje.id} - ${personaje.name}</h4>
                <p>Genero:${personaje.gender}</p>
                <p>Especie:${personaje.species}</p>
            </div>
        </div>
    `
}
cad+=`</div>
      `       // le agrego el cierre de la etiqueta div
console.log(cad)
document.getElementById("fotos").innerHTML=cad
*/

