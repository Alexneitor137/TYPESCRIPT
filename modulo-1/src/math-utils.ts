// src/math-utils.ts

// 1. Calcular Media
export function calcularMedia(datos: number[]): number | null {
    if (datos.length === 0) return null; // Caso límite exigido
    
    const suma = datos.reduce((acumulador, actual) => acumulador + actual, 0);
    return suma / datos.length;
}

// 2. Calcular Mediana
export function calcularMediana(datos: number[]): number | null {
    if (datos.length === 0) return null;

    // Copiamos el array para no mutar el original y lo ordenamos
    const ordenados = [...datos].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);

    if (ordenados.length % 2 !== 0) {
        // Le decimos a TS: "Confía en mí, sé que aquí hay un número"
        return ordenados[mitad] as number; 
    }
    
    // Si es par, la mediana es la media de los dos centrales
    const valor1 = ordenados[mitad - 1] as number;
    const valor2 = ordenados[mitad] as number;
    return (valor1 + valor2) / 2;
}

// 3. Filtrar Valores Atípicos
export function filtrarAtipicos(datos: number[], limite: number): number[] {
    // Retorna un nuevo array solo con los números menores o iguales al límite
    return datos.filter(numero => numero <= limite);
}