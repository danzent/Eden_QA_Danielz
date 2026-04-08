# Eden PACS - MPR Circular Menu Automation

## Descripción general

Este repositorio contiene una propuesta de automatización con **Cypress** para el visor **Eden PACS MPR**, enfocada en validar el flujo principal del **menú circular** que se abre mediante clic derecho sobre el viewport.

El alcance automatizado se centra en el grupo de **medición**, específicamente en el comportamiento de despliegue de subopciones dentro del radial, tomando como referencia la opción **Longitud**.

Dado que el visor renderiza el contenido clínico sobre **canvas** mediante **Cornerstone**, la automatización no depende únicamente de selectores tradicionales del DOM. En su lugar, utiliza una estrategia basada en:

- carga del visor desde una URL
- espera del canvas principal
- clic derecho real sobre el viewport
- movimiento real del mouse por coordenadas
- evidencia visual mediante screenshots

---

## Objetivo del proyecto

Automatizar el flujo mínimo viable del menú circular del visor MPR para demostrar:

- apertura correcta del radial
- interacción con el grupo de medición
- despliegue de subopciones
- evidencia visual del flujo automatizado

Esta automatización fue desarrollada como parte de un challenge técnico de QA y está pensada como una base inicial, no como una suite de regresión completa.

---

## Alcance cubierto

El flujo automatizado cubre:

1. Apertura de la URL del visor MPR
2. Espera a que el viewport clínico renderizado en canvas esté disponible
3. Apertura del menú circular con clic derecho
4. Hover sobre el grupo de medición
5. Despliegue de subopciones del grupo
6. Generación de screenshots como evidencia

---

## Contexto técnico

El visor de Eden PACS utiliza una arquitectura híbrida:

- **DOM tradicional** para toolbar, controles y estructura de la página
- **Canvas (Cornerstone)** para el viewport clínico e interacción visual sobre imágenes médicas

Debido a esto, las interacciones del menú circular no siempre responden correctamente a eventos sintéticos básicos como `trigger('mousemove')`.  
Por ello, esta solución utiliza la librería **cypress-real-events** para simular interacciones más cercanas al comportamiento real del mouse del navegador.

---

## Tecnologías utilizadas

- Node.js
- npm
- Cypress
- cypress-real-events
- Google Chrome

---

## Estructura del proyecto

```text
eden-cypress/
├── cypress/
│   ├── e2e/
│   │   └── eden-mpr.cy.js
│   ├── screenshots/
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
