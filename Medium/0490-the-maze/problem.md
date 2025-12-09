# 🎱 The Maze (Ball & Maze)

> **Difficulty:** Medium
> **Topic:** Graph, BFS, DFS
> **Pattern:** Matrix Traversal

## 📜 Problem Description

There is a maze represented by a matrix of empty spaces (`0`) and walls (`1`). There is a ball in the maze that can move **up**, **down**, **left**, or **right**.

⚠️ **Key Rule:** The ball **will not stop rolling** until it hits a wall. Once it stops, it can choose the next direction.

Given the matrix `maze`, the start position `start`, and the destination `destination`, the function must return `true` if the ball can stop at the destination, otherwise `false`.

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
