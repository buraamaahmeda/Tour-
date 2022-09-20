const display_Btn = document.querySelector(".fa-bars");
const popup_item = document.querySelector(".popup");
const close_popup_btn = document.querySelector(".fa-xmark");
const links = document.querySelectorAll(".links");


display_Btn.addEventListener("click",display_dropdown);
close_popup_btn.addEventListener("click",close_dropdown);

for (let i = 0; i < links.length; i++){
     links[i].addEventListener("click",close_dropdown);
}

function display_dropdown() {
     popup_item.style.opacity ="1";
     close_popup_btn.style.opacity = "1";
     display_Btn.style.opacity = "0";
}
function close_dropdown() {
     popup_item.style.opacity ="0";
     close_popup_btn.style.opacity = "0";
     display_Btn.style.opacity = "1";
}
