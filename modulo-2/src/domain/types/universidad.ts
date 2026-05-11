// src/domain/types/universidad.ts

// 1. Interfaces rigurosas con IDs inmutables (readonly)
export interface Estudiante {
    readonly id: string;
    nombre: string;
    email: string;
}

export interface Asignatura {
    readonly id: string;
    nombre: string;
    creditos: number;
}

// 2. Unión Discriminada (Tagged Union)
// Cada interfaz tiene una propiedad literal "tipo" que sirve como discriminante.

export interface MatriculaActiva {
    tipo: "ACTIVA";
    asignaturas: Asignatura[];
}

export interface MatriculaSuspendida {
    tipo: "SUSPENDIDA";
    motivo: string;
}

export interface MatriculaFinalizada {
    tipo: "FINALIZADA";
    notaMedia: number;
}

// Unimos todos los estados posibles en un solo tipo
export type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;

// 3. Función evaluadora usando el discriminante
export function generarReporte(estado: EstadoMatricula): string {
    switch (estado.tipo) {
        case "ACTIVA":
            // Aquí TypeScript sabe 100% que existe un array de 'asignaturas'
            return `El alumno está activo con ${estado.asignaturas.length} asignaturas.`;
        
        case "SUSPENDIDA":
            // Aquí sabe que existe un 'motivo'
            return `Matrícula suspendida. Motivo: ${estado.motivo}`;
            
        case "FINALIZADA":
            // Aquí sabe que existe una 'notaMedia'
            return `Matrícula finalizada. Nota media global: ${estado.notaMedia}`;
    }
}