let comp2 = document.createElement('div');
comp2.className = "comp-2";

let titulo2 = document.createElement('h2');
titulo2.innerText = "Buscar"
comp2.appendChild(titulo2);

let barra = document.createElement('div');
barra.className = "barra";
barra.innerText = "Buscar:"
comp2.appendChild(barra);

let btn = document.createElement('div');
btn.className = "btn";
btn.innerText = "Enviar";
comp2.appendChild(btn);

export { comp2 };
