module.exports = function towelSort (matrix) {
if(matrix == undefined || matrix ==[])
    {
        return [];
    }
    var digits = [];
    m = matrix.length;
    for(var i=0; i<m; i++)
    {
        n = matrix[i].length;
        if(i%2==0)
        {
            for(var j=0; j<n; j++)
            {
                digits.push(matrix[i][j]);
            }
        
        }
        else
        {
            for(var j=n-1; j>-1; j--)
            {
                digits.push(matrix[i][j]);
            }
        
        }
    }
    for(var i =0; i<digits.length;i++)
    {
        console.log(digits[i]);
    }
    return digits;
  }
