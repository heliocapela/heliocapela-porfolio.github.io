 
    function isPalindrome(){
        const string = document.getElementById("inputPal").value;
        const len = string.length;
        let msg = " : this is  a Palindrome";

        for (let i = 0 ; i <= len/2 ; i++) {
        if (string [i] != string[len - 1 - i]) {
            msg = " : this is not a Palindrome";
        }

        document.getElementById("resultPal").innerHTML= string + msg;

        }

    }