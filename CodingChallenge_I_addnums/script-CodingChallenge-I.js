function submit1(){
    var a =  document.getElementById("number1").value;
    var b =  document.getElementById("number2").value;
    var c = parseInt(a) + parseInt(b); 

    document.getElementById("result").innerHTML="The sum is = " + c;
}

 