# 📍 City Map: Oficina de Correos con Distancia Mínima

## 📝 Descripción del Problema

Dado un mapa de la ciudad en formato de matriz 2D, se requiere identificar la celda óptima para construir una  **Oficina de Correos (Post Office)** .

La ubicación óptima es aquella que **minimiza la suma de las distancias** de la Oficina de Correos a **todos los edificios** presentes en el mapa.

### Reglas Clave

* **Mapa:** Representado por una matriz 2D, donde `'b'` o `1` son edificios y `0` son espacios vacíos.
* **Distancia:** Debe calcularse usando la **Distancia de Manhattan** (taxicab geometry): **$d = |x_1 - x_2| + |y_1 - y_2|$**.
* **Ubicación:** La Oficina de Correos puede construirse en **cualquier celda** del mapa, incluso donde ya hay un edificio.
* **Objetivo:** Encontrar la **distancia total mínima** y la posición óptima **$(R_{opt}, C_{opt})$**.
