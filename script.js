let email=document.getElementById("email");
let password=document.getElementById("password");
let error=document.getElementById("error");

let smallRegexp =/[a-z]/ ;
let upperRegexp =/[A-Z]/ ;
let numberRegexp =/[0-9]/ ;
let speciaRegexp =/[!@#$%^&*]/;

function validate(){
    let status=false;
    // if(email.value==""||password.value==""){
    //     alert("Fields can't be empty");
    //     return false;
    // }
    // else{
    //     return true;
    // }
    let regexp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if(email.value==""){
    //     alert("Email can't be empty");
    //     return false;
    
    
    if(!regexp.test(email.value)){
        document.getElementById("error").style.display= "inline";
        error.innerHTML = "Please provide a valid email";
        error.style.color = "red";
        email.focus();
       
        return false;
    }else{
        document.getElementById("error").style.display = "none";
        status=true;
       
       
    }

    if (password.value==""){
        document.getElementById("pwderror").style.display = "inline";
         // password.style.border="2px solid red";
         pwderror.innerHTML = "password is mandatory";
         pwderror.style.color = "red";
         password.focus();
         return false;

        
     }else{
         document.getElementById("pwderror").style.display = "none";
         status=true;
         
     }


   
     document.getElementById("pwderror").style.display = "none";
     if (!smallRegexp.test(password.value)){
         document.getElementById("pwderror").style.display = "inline";
         pwderror.innerHTML = "password must have atleast a lowercase characters";
         pwderror.style.color = "red";
         password.focus();
         return false;
     }
     if (!upperRegexp.test(password.value)){
         document.getElementById("pwderror").style.display = "inline";
         pwderror.innerHTML = "password must have atleast a Uppercase characters";
         pwderror.style.color = "red";
         password.focus();
         return false;
     }
     if (!numberRegexp.test(password.value)){
         document.getElementById("pwderror").style.display = "inline";
         pwderror.innerHTML = "password must have atleast a  Number";
         pwderror.style.color = "red";
         password.focus();
         return false;
     }
     if (!speciaRegexp.test(password.value)){
         document.getElementById("pwderror").style.display = "inline";
         pwderror.innerHTML = "password must have atleast a  Special charactor";
         pwderror.style.color = "red";
         password.focus();
         return false;
     }
    let pwdRegexp =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!pwdRegexp.test(password.value)){
         document.getElementById("pwderror").style.display = "inline";
          // password.style.border="2px solid red";
          pwderror.innerHTML = "password field must have atleast 8 characters";
          pwderror.style.color = "red";
          password.focus();
          return false;

         
      }else{
          document.getElementById("pwderror").style.display = "none";
          status=true;
          
      }


      let phoneRegexp=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

      if(!phoneRegexp.test(phone.value)){
        phone.focus();
          document.getElementById("phoneerror").style.display = "inline";
          phoneerror.innerHTML = "Please provide a valid  phone Number";
          phoneerror.style.color = "red";
          return false;
      }else{
        document.getElementById("phoneerror").style.display = "none";
        status=true;
      }

      return status;


}

function passwordStrenght(){
    document.getElementById("pwderror").style.display = "none";
    if (!smallRegexp.test(password.value)){
     
        password.style.color = "red";
        
        return false;
    }
    if (!upperRegexp.test(password.value)){
        password.style.color = "red";
        return false;
    }
    if (!numberRegexp.test(password.value)){
        password.style.color = "orange";
        return false;
    }
    if (!speciaRegexp.test(password.value)){
        password.style.color = "orange";
        return false;
    }
   
   if (password.value.length>7){
    password.style.color = "green";
         return false;

        
     }

}


function removeError(){
    document.getElementById("error").style.display = "none";
}