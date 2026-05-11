# 🏗️ TypeScript Core Architecture & Strict Typing

![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-ES2022-green?logo=node.js)
![Status](https://img.shields.io/badge/Status-Completado-success)

Este repositorio contiene la implementación de los **Módulos 1 y 2** de la Fase 4 del Bootcamp de Ingeniería de Software. Se centra en el dominio de TypeScript como superconjunto estricto, aplicando patrones de diseño empresariales y modelado de datos complejo.

## 🗂️ Estructura del Proyecto

El proyecto está dividido en dos módulos independientes, cada uno con su propia configuración estricta de compilador (`tsconfig.json`).

### 🔹 Módulo 1: Lógica Pura e Inicialización
Ubicado en `/modulo-1`. Demuestra el uso de tipos primitivos, arrays, tuplas y control de flujo mediante la implementación de utilidades matemáticas.
* **Características:**
  * Inferencia y declaración de tipos estricta.
  * Manejo seguro de índices y aserciones justificadas (`as number`) para sobreponerse a reglas estrictas como `noUncheckedIndexedAccess`.
  * Transpilación a JavaScript puro (ES2022 / NodeNext).

### 🔹 Módulo 2: Modelado de Dominio y Genéricos
Ubicado en `/modulo-2`. Implementa patrones de diseño avanzados orientados a la escalabilidad de aplicaciones empresariales.
* **Características:**
  * **Uniones Discriminadas (Tagged Unions):** Modelado del ciclo de vida de una matrícula (`EstadoMatricula`) garantizando seguridad de tipos al 100% mediante propiedades discriminantes.
  * **Interfaces vs Types:** Separación semántica entre contratos estructurales (entidades) y alias funcionales (uniones lógicas).
  * **Programación Genérica (`<T>`):** Implementación de una capa de red simulada (`api-client.ts`) mediante promesas fuertemente tipadas y el contrato `RespuestaAPI<T>`.

## ⚙️ Configuración del Compilador

Ambos módulos operan bajo el estándar más estricto posible para evitar falsos positivos en tiempo de ejecución:
```json
{
  "strict": true,
  "module": "NodeNext",
  "target": "ES2022"
}

🚀 Ejecución
Para probar cualquier módulo (ej. Módulo 1):

cd modulo-1

npm install

npx tsx src/index.ts (Ejecución en tiempo real)

npx tsc (Compilación a la carpeta /dist)

Desarrollado como parte de las prácticas de Arquitectura de Software.