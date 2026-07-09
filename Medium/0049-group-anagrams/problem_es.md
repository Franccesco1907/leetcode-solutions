# 49. Agrupar Anagramas

[Enlace a LeetCode](https://leetcode.com/problems/group-anagrams/)

## Descripción

Dado un arreglo de cadenas `strs`, agrupa **los anagramas** juntos. Puedes retornar la respuesta en cualquier orden.

## Ejemplos

**Ejemplo 1:**

```text
Entrada: strs = ["eat","tea","tan","ate","nat","bat"]

Salida: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explicación:

No hay ninguna cadena en strs que pueda reordenarse para formar "bat".
Las cadenas "nat" y "tan" son anagramas ya que pueden reordenarse para formar una a la otra.
Las cadenas "ate", "eat" y "tea" son anagramas ya que pueden reordenarse para formar una a la otra.
```

**Ejemplo 2:**

```text
Entrada: strs = [""]

Salida: [[""]]
```

**Ejemplo 3:**

```text
Entrada: strs = ["a"]

Salida: [["a"]]
```

## Restricciones

* `1 <= strs.length <= 10^4`
* `0 <= strs[i].length <= 100`
* `strs[i]` consiste solo de letras minúsculas del alfabeto inglés.
