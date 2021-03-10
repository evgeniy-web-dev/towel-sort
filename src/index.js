
// Алгоритм «сортировки полотенец»

module.exports = function towelSort (matrix) {
    let result = [];
    if (matrix === undefined){return result};
    for (i = 0; i<matrix.length; i++){
      if (i % 2 === 0){
      for (n = 0; n<matrix[i].length; n++ ){
        result.push(matrix[i][n])
      }
      }
      if (i % 2 !==0){
        for (z = matrix[i].length-1; z>=0; z-- ){
            result.push(matrix[i][z])
  
      }
      }
        }
    return(result)
  }
