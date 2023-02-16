 
    function checkFizzBuzz(){  
          let inputn =  document.getElementById("inputNum").value;
        for (let i = 1 ; i <= inputn; i++) {
        if (i % 3 === 0 && i % 5 === 0) document.getElementById("resultFB").innerHTML= "Fizz Buzz";
        
        else if  
            (i % 3 === 0 ) document.getElementById("resultFB").innerHTML= "Buzz";
     
        else if  
            (i % 5 === 0 ) document.getElementById("resultFB").innerHTML= "Fizz";
     
        else  document.getElementById("resultFB").innerHTML= i ; 
            }

        }

        