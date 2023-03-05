function validation(){
let x=document.getElementById("nameinp").value;
let y=document.getElementById("emailinp").value;

if(x==""){document.getElementById("name").style.display="block";}
if(y==""){document.getElementById("email").style.display="block";}

if(x==""||y=="") return false;

}