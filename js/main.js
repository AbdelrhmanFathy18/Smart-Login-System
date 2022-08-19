var addName = document.getElementById("newName");
var addEmail = document.getElementById("newEmail");
var addPassword = document.getElementById("newpass");
var userEmail = document.getElementById("loginEmail");
var userpass = document.getElementById("loginpass");
var invalid = document.getElementById("show");
var go = document.getElementById("go");
var showName = document.getElementById("showName");
var createAccount;
if(localStorage.getItem("account") == null){
    createAccount = [];
}
else{
    createAccount = JSON.parse(localStorage.getItem("account"));
}
var login;



function addAccount(){
    if(addName.value !== "" && addEmail.value !== "" && addPassword.value !== ""){
        var newAccount = {
            name : addName.value,
            email : addEmail.value,
            password : addPassword.value
        }
        createAccount.push(newAccount);
        localStorage.setItem("account",JSON.stringify(createAccount));    
        invalid.innerHTML = "succes " ;
    }
    else{
        invalid.innerHTML = "All inputs is required "
    }
};
function logIN(){
    if(userEmail.value!=="" && userpass.value!==""){
        login= {
            email : userEmail.value,
            pass : userpass.value,
        };
        createAccount = JSON.parse(localStorage.getItem("account"));
        console.log(createAccount)
        for(var i = 0 ;i<createAccount.length;i++){
            if(login.email == createAccount[i].email && login.pass == createAccount[i].password ){
                xx = i;
                window.open("home.html","_self");
                localStorage.setItem("currentUser", JSON.stringify(createAccount[i].name) );
            }
        }     
    }
    else{
        invalid.innerHTML = "All inputs is required "
    }
};





