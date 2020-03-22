module.exports = function towelSort (matrix) {
    var digits = [];
    m = matrix.length;
    n = matrix[0].length;
    for(var i=0; i<m; i++)
    {
        if(i%2==0)
        {
            for(var j=0; j<n; j++)
            {
                digits.push(matrix[i][j]);
            }
        
        }
        else
        {
            for(var j=2; j>-1; j--)
            {
                digits.push(matrix[i][j]);
            }
        
        }
    }
    return digits;
  }
