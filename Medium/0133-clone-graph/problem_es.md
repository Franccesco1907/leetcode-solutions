# 133. Clone Graph

[Enlace de LeetCode](https://leetcode.com/problems/clone-graph/)

## Descripción

Dada una referencia de un nodo en un gráfico no dirigido **conectado**.

Devuelve una **copia profunda** (clon) del gráfico.

Cada nodo en el gráfico contiene un valor (`int`) y una lista (`List[Node]`) de sus vecinos.

```texto

clase Nodo {
    valor internacional público;
    Lista pública <Nodo> vecinos;
}

```

 

**Formato de caso de prueba:**

Para simplificar, el valor de cada nodo es el mismo que el índice del nodo (indexado en 1). Por ejemplo, el primer nodo con `val == 1`, el segundo nodo con `val == 2`, y así sucesivamente. El gráfico se representa en el caso de prueba mediante una lista de adyacencia.

Una lista de adyacencia es una colección de listas desordenadas que se utilizan para representar un gráfico finito. Cada lista describe el conjunto de vecinos de un nodo en el gráfico.

El nodo dado siempre será el primer nodo con `val = 1`. Debes devolver la **copia del nodo dado** como referencia al gráfico clonado.

 

**Ejemplo 1:**

```texto

**Entrada:** adjList = [[2,4],[1,3],[2,4],[1,3]]
**Salida:** [[2,4],[1,3],[2,4],[1,3]]
**Explicación:** Hay 4 nodos en el gráfico.
Los vecinos del primer nodo (val = 1) son el segundo nodo (val = 2) y el cuarto nodo (val = 4).
Los vecinos del segundo nodo (val = 2) son el primer nodo (val = 1) y el tercer nodo (val = 3).
Los vecinos del tercer nodo (val = 3) son el segundo nodo (val = 2) y el cuarto nodo (val = 4).
Los vecinos del cuarto nodo (val = 4) son el primer nodo (val = 1) y el tercer nodo (val = 3).

```

**Ejemplo 2:**

```texto

**Entrada:** adjList = [[]]
**Salida:** [[]]
**Explicación:** Tenga en cuenta que la entrada contiene una lista vacía. El gráfico consta de un solo nodo con val = 1 y no tiene vecinos.

```

**Ejemplo 3:**

```texto

**Entrada:** adjList = []
**Salida:** []
**Explicación:** Este es un gráfico vacío, no tiene ningún nodo.

```

 

**Restricciones:**


* El número de nodos en el gráfico está en el rango `[0, 100]`.

* `1 <= Nodo.val <= 100`

* `Node.val` es único para cada nodo.

* No hay aristas repetidas ni bucles automáticos en el gráfico.

* El gráfico está conectado y todos los nodos se pueden visitar a partir del nodo dado.
