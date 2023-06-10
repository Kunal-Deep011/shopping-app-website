
let lbtn = document.querySelector(".login12");

lbtn.addEventListener("click",(e)=>{

  e.preventDefault();

  
let loginEmail = document.getElementById("email1").value;
let loginPass = document.getElementById("pass1").value;

 // Get existing users from local storage
 const users = JSON.parse(localStorage.getItem("users")) || [];


 const user = users.find((user) => user.email === loginEmail && user.password === loginPass);
 

 if(!user){

  swal("OPPS..!", "No user found...First register yourself", "error");
 }
 swal("OPPS..!", "Credentials are not matching", "error");
 for(let i = 0; i < users.length; i++){
  if(users[i].email === loginEmail && users[i].password === loginPass){

    let token = generateToken();
    let currObj = {
      ...users[i], token
    }

    
    localStorage.setItem("currUser",JSON.stringify(currObj));


    swal("Good Job!", "Login Successful", "success");

 setTimeout(()=>{
  window.location.href = "../shop home page/index.html"
 },1000);
      
  }
 };

 

});

      function generateToken() {
        let token = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 16; i++) {
          token += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return token;
      }

      