function sum(){  

    var w = document.getElementById('num1').value || 0;
    var x = document.getElementById('num2').value || 0;
    var y = document.getElementById('num3').value || 0;
    console.log(w,x,y)
    max = (w > x) ? 
    (w > y ? w : y) : 
    (x > y ? x : y);
    document.getElementById('final').value=max;
   } 
   sum();