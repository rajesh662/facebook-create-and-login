let form =  document.querySelector("#form");
let area =  document.querySelector(".area");
let post =  document.querySelector(".post");
let posty = document.querySelector(".posty");
let posty1 = document.querySelector(".posty1");
let date1 = document.querySelector(".date1");
let time1 = document.querySelector(".time1");



form.addEventListener("click" , function(rk){
    rk.preventDefault();
    readPost();
});
let empty = {};
function readPost(){
    empty["postadd"] = area.value;
    createPost();
}
function createPost(){
    posty1.innerHTML =`<div>
    <p>${empty.postadd}</p>
    <span class="btn d-flex">
    <i onclick='editPost(this)'  class="fa-sharp fa-solid fa-pen-to-square flex-grow-1"></i>
    <i onclick = 'deletePost(this)' class="fa-solid fa-trash  flex-grow-1"></i>
    </span>
    </div>`
    area.value = " ";
}
function editPost(rk){
 area.value = rk.parentElement.previousElementSibling.innerHTML;
let date = new Date();
rk.date1.innerHTML=date.toLocaleDateString();
rk.time1.innerHTML=date.toLocaleTimeString();


}
function deletePost(rk){
  rk.parentElement.previousElementSibling.remove();
  let date = new Date();
  
  area.value=" ";
}
