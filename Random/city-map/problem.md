# 📍 City Map: Post Office with Minimum Distance

## 📝 Problem Description

Given a city map in a 2D matrix format, you need to identify the optimal cell to build a **Post Office**.

The optimal location is the one that **minimizes the sum of distances** from the Post Office to **all buildings** present on the map.

### Key Rules

* **Map:** Represented by a 2D matrix, where `'b'` or `1` are buildings and `0` are empty spaces.
* **Distance:** Must be calculated using **Manhattan Distance** (taxicab geometry): **$d = |x_1 - x_2| + |y_1 - y_2|$**.
* **Location:** The Post Office can be built on **any cell** of the map, even where there is already a building.
* **Goal:** Find the **minimum total distance** and the optimal position **$(R_{opt}, C_{opt})$**.
