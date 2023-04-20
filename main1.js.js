



let formL =  document.querySelector("#log");

formL.addEventListener("submit" ,function adddata(addrk){

    addrk.preventDefault();

    let out1 = document.querySelector(".emailcheck");
    let out2 = document.querySelector(".passcheck");


    let logemail = document.querySelector("#mail").value;
    let logpassword = document.querySelector("#pwd").value;

   let gemail = localStorage.getItem("Email");
   let gPwd = localStorage.getItem("PWD");


 if (logpassword==gPwd && gemail==logemail){
    out2.innerHTML="login success";
    out2.style.color="green";
    location.assign("file:///D:/fabevy/git-project-js/facebook-create-and-login/todo.html")
}
else {
    out2.innerHTML="pls create email or password";
    out2.style.color="red";
}

})


