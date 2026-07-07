# CRUD con React y LocalStorage

Proyecto de evaluación para la asignatura Desarrollo Front-End.

## Instalación y ejecución

```bash
npm install
npm start
```

La app se abre en `http://localhost:3000`.

## Estructura

- `src/App.js` — estado y lógica (agregar, editar, eliminar, persistencia).
- `src/Form.js` — formulario para agregar o actualizar un elemento.
- `src/List.js` — recorre y muestra la lista de elementos.
- `src/Item.js` — cada elemento con sus botones Editar y Eliminar.
- `src/App.css` — estilos de la aplicación (agregado en commit 1).

## Historial de entregas (commits)

1. **commit 1: estilos CSS y conexión con className** — tarjeta central, estilos de título/formulario/lista, botones diferenciados por color.
2. **commit 2: validación, contador y confirmación al eliminar** — no permite elementos vacíos, muestra el total de elementos y pide confirmación antes de borrar.
3. **commit 3: completar, buscar y borrar todo** — marcar como completado (tachado), buscador en tiempo real y botón para borrar todos los elementos.
