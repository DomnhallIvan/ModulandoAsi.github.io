import { FactorialesShidos } from './facts.js';
import {Reloj_instantaneo} from "./Time.js";
import { Triangulo,Cuadrado,Pentagono } from './LOKOKTE.js';

const triangulo = new Triangulo([6, 6, 6]);
console.log(`Área del triángulo: ${triangulo.obtenerArea()}`);
console.log(`Perímetro del triángulo: ${triangulo.obtenerPerimetro()}`);

const cuadrado = new Cuadrado([5, 5, 5, 5]);
console.log(`Área del cuadrado: ${cuadrado.obtenerArea()}`);
console.log(`Perímetro del cuadrado: ${cuadrado.obtenerPerimetro()}`);

const pentagono = new Pentagono([2, 2, 2, 2, 2]);
console.log(`Área del pentágono: ${pentagono.obtenerArea()}`);
console.log(`Perímetro del pentágono: ${pentagono.obtenerPerimetro()}`);

const numero=5;
FactorialesShidos(numero);

Reloj_instantaneo();



