function filterEvenNumbers(matrix) {
    const result = [];
    
    for (let i = 0; i < matrix.length; i++) {
      const evenRow = [];
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] % 2 === 0) {
          evenRow.push(matrix[i][j]);
        }
      }
      result.push(evenRow);
    }
    
    return result;
  }
  