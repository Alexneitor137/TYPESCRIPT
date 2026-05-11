# 🏛️ Arquitectura de Datos - Módulo 2

## 1. Interfaces vs. Types
En el modelo de dominio (`universidad.ts`), hemos utilizado **interfaces** (`Estudiante`, `Asignatura`) para definir las entidades principales. Elegimos `interface` porque representa contratos estructurales claros orientados a objetos, que en el futuro permiten hacer "declaration merging" o ser implementados por clases.

Sin embargo, para la agrupación de los estados (`EstadoMatricula`), utilizamos un **type alias** (`type`). La razón arquitectónica es que los `types` son la herramienta adecuada para representar uniones lógicas (`A | B | C`), algo que la sintaxis de las interfaces no permite.

## 2. Uniones Discriminadas
Se aplicó una Unión Discriminada mediante la propiedad literal compartida `tipo` ("ACTIVA", "SUSPENDIDA", "FINALIZADA"). Esto permite al compilador realizar un *narrowing* (estrechamiento de tipos) 100% seguro. Elimina la necesidad de tener un objeto gigante lleno de propiedades opcionales ambiguas, forzándonos a manejar solo el estado válido en el momento correcto.

## 3. Abstracción con Genéricos `<T>`
En la capa de red (`api-client.ts`), la lógica de respuesta HTTP se ha tipado utilizando genéricos (`RespuestaAPI<T>`). 
Esto abstrae por completo la lógica de red del modelo de datos. En lugar de escribir funciones redundantes como `obtenerEstudiantes()` y `obtenerAsignaturas()`, tenemos un único método genérico. El genérico `<T>` garantiza que el tipado estricto "viaje" desde la petición hasta el resultado final, asegurando que el payload de la propiedad `datos` coincida exactamente con lo que el desarrollador solicitó, reduciendo a cero los errores de casting manual.