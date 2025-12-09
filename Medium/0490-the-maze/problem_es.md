# 🎱 The Maze (Ball & Maze)

> **Dificultad:** Medium
> **Tópico:** Graph, BFS, DFS
> **Patrón:** Matrix Traversal

## 📜 Descripción del Problema

Se tiene un laberinto representado por una matriz de espacios vacíos (`0`) y paredes (`1`). Hay una bola en el laberinto que puede moverse hacia **arriba**, **abajo**, **izquierda** o **derecha**.

⚠️ **Regla Clave:** La bola **no dejará de rodar** hasta chocar contra una pared. Una vez que se detiene, puede elegir la siguiente dirección.

Dada la matriz `maze`, la posición de inicio `start` y el destino `destination`, la función debe retornar `true` si la bola puede detenerse en el destino, de lo contrario `false`.

### Input / Output

```javascript
// Input
const maze = [
  [0,0,1,0,0],
  [0,0,0,0,0],
  [0,0,0,1,0],
  [1,1,0,1,1],
  [0,0,0,0,0]
];
const start = [0,0];
const destination = [4,4];

// Output
// true
```
