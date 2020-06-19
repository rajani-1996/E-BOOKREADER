let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
    
        
    //email validation//

        function validate() {
                  
        let emailcheck = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
        // let pwdcheck = /^(?=.*[0-9])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;


            if (emailcheck.test(email.value)){
                document.getElementById('emailerror').innerHTML="";
                }

            else{
                document.getElementById('emailerror').innerHTML="** email is invalid**";
                 return false;
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
    
    
}