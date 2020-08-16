function validate()
{
    var abc= document.getElementById('username').value;
    var xyz= document.getElementById('password').value;

    if(abc == "/^[a-zA-Z0-9]+@[gmail.com]^/" && xyz == "/^[a-zA-Z0-9]^/" )
    {
           alert("Login successfull");
       } 
       else
       {
           alert("Invalid Submission");
       }


       document.getElementById('#submit').value=" ";
    }

