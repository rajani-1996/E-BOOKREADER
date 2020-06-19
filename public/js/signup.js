let Fname = document.getElementById("Fname");
        let Lname = document.getElementById("Lname");
        let number = document.getElementById("number");
        let email = document.getElementById("email");
        let pwd = document.getElementById("pwd");
        let cnfpwd = document.getElementById("cnfpwd");
        let numbercheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        let gender = document.getElementById("gender");
        
        function validate() {


         //name validation//

           if (Fname.value == ""){
            document.getElementById('Fnames').innerHTML = "**Please enter your First name**";
            return false;
            }

           else if (Fname.value.length<2){
            document.getElementById('Fnames').innerHTML = "**Please write more than one character**";
            return false;
            }

            else if (!isNaN(Fname.value)){
            document.getElementById('Fnames').innerHTML = "**Please write characters only**";
            return false;
            }

            else (Fname.value);{
            document.getElementById('Fnames').innerHTML = "";
            }
        //name validation//

        if (Lname.value == ""){
            document.getElementById('Lnames').innerHTML = "**Please enter your Last name**";
            return false;
            }

            else if (!isNaN(Lname.value)){
            document.getElementById('Lnames').innerHTML = "**Please write characters only**";
            return false;
            }

            else (Lname.value);{
            document.getElementById('Lnames').innerHTML = "";
            }
        //number validation//

        // if (number.value == ""){
        //     document.getElementById('numbers').innerHTML = "**Please enter your mobile number**";
        //     return false;
        //     }

        //     else if ((number.value.length <10) || (number.value.length >10)){
        //     document.getElementById('numbers').innerHTML = "**Required 10 digits**";
        //     return false;
        //     }

        //     else if (isNaN(number.value)){
        //     document.getElementById('numbers').innerHTML = "**Please write numbers only**";
        //     return false;
        //     }

        //     else (number.value);{
        //     document.getElementById('numbers').innerHTML = "";
        //     }

        if(numbercheck.test(number.value)){
            document.getElementById('numbers').innerHTML="";
            }

        else{
            document.getElementById('numbers').innerHTML="**Please enter a valid Number**";
            return false;
            }


            
        //email validation//
        if (email.value == ""){
            document.getElementById('emails').innerHTML = "**Please enter your Email ID**";
            return false;
            }

           else if (email.value.indexOf('@')<=0){
            document.getElementById('emails').innerHTML = "**Invalid position of @**";
            return false;
            }

            else if (email.value.charAt(email.value.length - 4)!='.' && email.value.charAt(email.value.length - 3)!='.'){
            document.getElementById('emails').innerHTML = "**Invalid position of email**";
            return false;
            }

            else (email.value);{
            document.getElementById('emails').innerHTML = "";
            }


     //password validation//


            if (pwd.value == "") {
            document.getElementById('pwds').innerHTML = " **Please enter a valid password**";
            return false;
            }

            else if (pwd.value.length <=8) {
            document.getElementById('pwds').innerHTML = "*Minimum 8 characters required*";
            return false;
            }

            else if (pwd.value.search (/[0-9]/) ==-1) {
            document.getElementById('pwds').innerHTML = " *Atleast one number*";
            return false;
            }

            else if (pwd.value.search (/[a-z]/) ==-1) {
            document.getElementById('pwds').innerHTML = " *Atleast one lowercase letter*";
            return false;
            }

            else if (pwd.value.search (/[A-Z]/) ==-1) {
            document.getElementById('pwds').innerHTML = " *Atleast one uppercase letter*";
            return false;
            }
            else if (pwd.value.search (/[!@#$%^&*]/) ==-1) {
            document.getElementById('pwds').innerHTML = " *Atleast one symbol*";
            return false;
            }
    
            else (pwd.value);{
            document.getElementById('pwds').innerHTML = "";
            }


    //confirm password validation//

                if (cnfpwd.value == "") {
                document.getElementById('cnfpwds').innerHTML = " **Please confirm your password**";
                return false;
                }

                else if (pwd.value != cnfpwd.value){
                document.getElementById('cnfpwds').innerHTML = "**Password is not matching**";
                return false;
                }

                else (cnfpwd.value);{
                document.getElementById('cnfpwds').innerHTML = "";
                }
    // gender validation//

 

    document.getElementById('message').innerHTML = " **Login Successfull**";
    document.getElementById('message').style.color = "green";
     document.getElementById('message').style.fontSize = "14px";
    return true;

}

let pass= document.getElementById('pwd');
    pass.addEventListener('keyup',function(){
    checkPassword(pwd.value)
     })

     function checkPassword(password){

        var prog=document.getElementById('prog');
        var strengthBar= document.getElementById('strength');
        var strength=0;

        if(password.match(/[a-z]/))
         {
        strength += 1;
                        
         }
         if((password.length>=6)&&(password.match(/[!\@\#\$\%\^\&\*\?\-\_\>\<\.\,]/)))
         {
         strength += 1;
                        
          }
                      
          if((password.length>=8)&&(password.match(/[a-z]/))&&(password.match(/[A-Z]/))&&(password.match(/[0-9]/)))
           {
          strength += 1;
        }
        switch(strength)
        {
          case 0: strengthBar.style.width='10%';
                  prog.style.visibility='visible';
                  document.getElementById('strength1').style.visibility='visible';
                  break;

          case 1: strengthBar.style.width='40%';
                  prog.style.visibility='visible';
                  strengthBar.style.backgroundColor='red';
                  document.getElementById('strength1').style.visibility='visible';
                  document.getElementById('strength1').innerText="Poor"
                  document.getElementById('strength1').style.color='red'
                  break;

          case 2: strengthBar.style.width='70%';
                  prog.style.visibility='visible';
                  strengthBar.style.backgroundColor='orange';
                  document.getElementById('strength1').style.visibility='visible';
                  document.getElementById('strength1').innerText="Medium"
                  document.getElementById('strength1').style.color='orange'
                  break;
                  
          case 3: strengthBar.style.width='100%';
                  prog.style.visibility='visible';
                  strengthBar.style.backgroundColor='green';
                  document.getElementById('strength1').style.visibility='visible';
                  document.getElementById('strength1').innerText="Strong"
                  document.getElementById('strength1').style.color='green'
                  break;

      }

    }
                        