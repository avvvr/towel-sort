// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) return [];
    let length = matrix.length;
    for (let i = 0; i < length; i++) {
      if(i%2===1) matrix[0].reverse();
        for (let j = 0; j < matrix[0].length; j++) {
            matrix.push(matrix[0][j]);
        }
        matrix.shift();
    }
    return matrix;
}
