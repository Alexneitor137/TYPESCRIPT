// src/index.ts
import { calcularMedia, calcularMediana, filtrarAtipicos } from './math-utils.js';
// OJO: En NodeNext con TypeScript, las importaciones locales deben llevar .js aunque el archivo sea .ts

const dataset: number[] = [12, 15, 8, 45, 14, 10]; // 45 es un atípico

console.log("📊 Array original:", dataset);
console.log("Media:", calcularMedia(dataset));
console.log("Mediana:", calcularMediana(dataset));

const datosLimpios = filtrarAtipicos(dataset, 20);
console.log("✅ Array sin atípicos (límite 20):", datosLimpios);
console.log("Nueva Media:", calcularMedia(datosLimpios));

// Probando el caso límite (Array vacío)
const arrayVacio: number[] = [];
console.log("Media de array vacío:", calcularMedia(arrayVacio)); // Debe dar null