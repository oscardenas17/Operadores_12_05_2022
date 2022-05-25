let A = (prompt("Ingrese el valor de la variable A\n false\n true") == "true") ? true : false;
let B = (prompt("Ingrese el valor de la variable B\n false\n true") == "true") ? true : false;

document.querySelector("#operadorAND").insertAdjacentHTML("beforeend", `
    <tr class="resultado">
        <td>${A}</td>
        <td>${B}</td>
        <td>${A && B}</td>
    </tr>
`);


// let A = Number(prompt("Ingrese el valor de la variable A\n 0 = false\n 1 = true"));
// let B = Number(prompt("Ingrese el valor de la variable B\n 0 = false\n 1 = true"));

// document.querySelector("#operadorAND").insertAdjacentHTML("beforeend", `
//     <tr class="resultado">
//         <td>${A}</td>
//         <td>${B}</td>
//         <td>${A && B}</td>
//     </tr>
// `);


// let x = 10;
// let y = 3;
// let res = 0;

// let sel = document.querySelectorAll("em");
// sel[0].insertAdjacentText("beforeend", x);
// sel[1].insertAdjacentText("beforeend", y);
// sel[2].insertAdjacentText("beforeend", res);

// res = x + y;
// document.body.insertAdjacentHTML("beforeend", `
//     <div>
//         <b>Significado</b>
//     </div>
//     <hr>
//     <div>
//         <em>res = x + y;</em>
//         <br>
//         <mark>res</mark> : <em>${res}</em>
//     </div>
// `);


// // Abreviado
// x += y;
// document.body.insertAdjacentHTML("beforeend", `
//     <br>
//     <div>
//         <b>Abreviado</b>
//     </div>
//     <hr>
//     <div>
//         <em>x += y;</em>
//         <br>
//         <mark>x</mark> : <em>${x}</em>
//     </div>
// `);




// let nombre = "Oscar Yesid";

// // Significado
// // let nombreCompleto = nombre + " Cárdenas Santos";
// //Abreviado
// // nombre += " Castro Escamilla";

// document.body.insertAdjacentText("beforebegin", nombre);