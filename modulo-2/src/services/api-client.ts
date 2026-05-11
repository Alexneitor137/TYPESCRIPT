// 1. La Interfaz Genérica (La 'T' será reemplazada por el tipo real que pidamos)
export interface RespuestaAPI<T> {
    codigoEstado: number;
    exito: boolean;
    datos: T;
    errores?: string[];
}

// 2. Método genérico simulando una base de datos con Promesas
export async function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
    console.log(`[API] Solicitando datos a: ${endpoint}...`);

    // Simulamos el tiempo de espera de una red (500ms)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulamos una validación simple
            if (!endpoint) {
                reject(new Error("Endpoint inválido"));
                return;
            }

            // Para este laboratorio, simulamos los datos devueltos forzándolos a tipo T (mocking)
            // En la vida real, aquí haríamos un fetch() y parsearíamos el JSON.
            const datosSimulados = {} as T;

            const respuesta: RespuestaAPI<T> = {
                codigoEstado: 200,
                exito: true,
                datos: datosSimulados
            };

            resolve(respuesta);
        }, 500);
    });
}