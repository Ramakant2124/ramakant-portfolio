

function sendmail(){
    console.log("sendmail call");
    let name=document.getElementById("name").value;
    let subject=document.getElementById("subject").value;
    let email=document.getElementById("email").value;
    let msg=document.getElementById("msg").value;
    
    if(!name || !msg || !subject||!email){
      alert("Enter all valid Details.");
    }
    else{     
         Email.send({
           Host : "smtp.elasticemail.com",
           Username : "chaudhariramakant754@gmail.com",
           Password : "ramakant#1234",
           To : 'chaudhariramakant754@gmail.com',
           From :"chaudhariramakant754@gmail.com",
           Subject : subject,
           Body : "Name : " + name +" Email : " + email +  " Message : "+msg 
       }).then(
         message => alert(message)
        
       );
        document.getElementById("name").value="";
        document.getElementById("subject").value="";
        document.getElementById("email").value="";
        document.getElementById("msg").value="";
       console.log("success");
       
      
    }
   
}