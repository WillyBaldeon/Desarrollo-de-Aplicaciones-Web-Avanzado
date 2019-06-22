;(function () { function Quicksort (uno, primero, segundo) {
    var pivotValue = uno[primero],i = primero,j = segundo,temp
    while (i < j) { 
      while (uno[i] <= pivotValue && i < j) i++
      while (uno[j] > pivotValue) j-- 
      if (i < j) {                       
        temp = uno[i]
        uno[i] = uno[j]
        uno[j] = temp; }
    }
    uno[primero] = uno[j] 
    uno[j] = pivotValue
        if (primero < j - 1)
      Quicksort(uno, primero, j - 1) 
    if (j + 1 < segundo)
      Quicksort(uno, j + 1, segundo) 
      return uno;
  }
  var uno = [100, 300, 150, 25, 112, 10, 115, 20, 1,3], primero = 0, segundo = uno.length - 1
  console.log(Quicksort(uno, primero, segundo))
}())