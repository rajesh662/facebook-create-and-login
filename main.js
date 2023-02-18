let form =  document.querySelector("#form");

form.addEventListener("submit",function stordata(rk){
    rk.preventDefault();
    let fname = document.querySelector("#fname").value;
    let sname = document.querySelector("#sname").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    localStorage.setItem("Name",fname);
    localStorage.setItem("Same",sname);
    localStorage.setItem("Email",email);
    localStorage.setItem("PWD",password);

})