let comp1 = document.createElement('div');
comp1.className = "comp-1";

let titulo1 = document.createElement('h2');
titulo1.innerText = "Componente 1";
comp1.appendChild(titulo1);

let img1 = document.createElement('img');
img1.src = "https://img.freepik.com/foto-gratis/arco-iris-fotorrealista-paisaje-natural-campo_23-2151597635.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid";
comp1.appendChild(img1);

export { comp1 };