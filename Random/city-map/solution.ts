// First Solution

//type Position2D = [number, number];

// function getOptimalCell(map: number[][]): Position2D {
//   const rows = map.length;
//   const columns = map[0].length;
//   let optimalCell: Position2D = [0, 0];
//   let optimalSum = Infinity;
//   let arrayBuildings: Position2D[] = [];

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < columns; j++) {
//       if (map[i][j]) arrayBuildings.push([i, j]);
//     }
//   }

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < columns; j++) {
//       let sum = 0;
//       for (let k = 0; k < arrayBuildings.length; k++) {
//         const [x, y] = arrayBuildings[k];
//         sum += Math.abs(x - i) + Math.abs(y - j);
//       }
//       if (sum < optimalSum) {
//         optimalSum = sum;
//         optimalCell = [i, j];
//       }
//     }
//   }

//   return optimalCell;
// }



// Second and optimal solution


type Position2D = [number, number];

function getOptimalCell(map: number[][]): Position2D {
  const rowIndices: number[] = [];
  const colIndices: number[] = [];

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j]) {
        rowIndices.push(i);
        colIndices.push(j);
      }
    }
  }

  if (!rowIndices.length) return [0, 0];

  // rowIndices are ordered because we push every element in order.
  colIndices.sort((a, b) => a - b);

  const medianIndex = Math.floor((rowIndices.length - 1) / 2);

  return [rowIndices[medianIndex], colIndices[medianIndex]];
}

const mapExample: number[][] = [
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 1, 0],
];

console.log(getOptimalCell(mapExample));