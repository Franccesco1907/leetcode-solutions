# 2. Add Two Numbers

[Enlace de LeetCode](https://leetcode.com/problems/add-two-numbers/)

## Descripción

Se le proporcionan dos listas enlazadas **no vacías** que representan dos números enteros no negativos. Los dígitos se almacenan en **orden inverso** y cada uno de sus nodos contiene un solo dígito. Suma los dos números y devuelve la suma como una lista enlazada.

Puedes asumir que los dos números no contienen ningún cero a la izquierda, excepto el propio número 0.

 

**Ejemplo 1:**

```texto

**Entrada:** l1 = [2,4,3], l2 = [5,6,4]
**Salida:** [7,0,8]
**Explicación:** 342 + 465 = 807.

```

**Ejemplo 2:**

```texto

**Entrada:** l1 = [0], l2 = [0]
**Salida:** [0]

```

**Ejemplo 3:**

```texto

**Entrada:** l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
**Salida:** [8,9,9,9,0,0,0,1]

```

 

**Restricciones:**


* El número de nodos en cada lista vinculada está en el rango `[1, 100]`.

* `0 <= Nodo.val <= 9`

* Se garantiza que la lista representa un número que no tiene ceros a la izquierda.
