const Firstname = document.querySelector("#f1");

const Lastname = document.querySelector("#l1");
const oldpassword = document.querySelector("#o1");
const newpassword = document.querySelector("#n2");
const confirm1password = document.querySelector("#c2");




const logoutbutton = document.querySelector("#lb");
const saveinfo = document.querySelector("#si");

const currUser = JSON.parse(localStorage.getItem("currUser"));



let allUserArr = JSON.parse(localStorage.getItem("users"));

Firstname.value = currUser.fname
Lastname.value = currUser.lname

// function for saving user data...

saveinfo.addEventListener("click", savefunc);

function savefunc(e){
    
}

saveinfo.addEventListener("click",savePASS);

function savePASS(e){
    e.preventDefault();

    if(oldpassword.value != currUser.password){

        swal("Opps..!", "Please Put the Correct Password", "error");

    }
    if(newpassword.value != confirm1password.value){
       
        swal("Opps..!", "New-Password and Confirm-Password MissMatch", "error");

    }
    else if(newpassword.value == ""){
        swal("Opps..!", "Please put the New Password Before Saving", "error");
    }
    else if(newpassword.value!="" && newpassword.value == confirm1password.value && oldpassword.value == currUser.password){
        currUser.password = newpassword.value;
        currUser.fname = Firstname.value;
        currUser.lname = Lastname.value;

        console.log(currUser);
        localStorage.setItem("currUser",JSON.stringify(currUser))

        allUserArr.forEach((item) =>{
            if(currUser.email == item.email){
                item.password = newpassword.value
                item.fname = Firstname.value
                item.lname = Lastname.value
            }
        });
        localStorage.setItem("users",JSON.stringify(allUserArr))

        swal("Great...", "Successfully Done", "success");
        oldpassword.value="";
        newpassword.value="";
        confirm1password.value="";

    }


}

logoutbutton.addEventListener("click", logoutfunc);
function logoutfunc(e){
    e.preventDefault()

    localStorage.setItem("currUser",JSON.stringify({}))
    window.location.href = "../index.html";
    return;
}