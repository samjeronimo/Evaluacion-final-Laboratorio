import { comp1 } from "./componente1/componente1.js";
import { comp2 } from "./componente2/componente2.js";
import { comp3 } from "./componente3/componente3.js";

let root = document.querySelector("#root");

let cuadro1 = document.createElement('div');
cuadro1.className = "cuadro";
cuadro1.appendChild(comp1);
cuadro1.appendChild(comp2);
cuadro1.appendChild(comp3);

root.appendChild(cuadro1);
