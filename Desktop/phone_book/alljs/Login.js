
  function toggle(){
    let password = document.querySelector(".login_password");
    let eye_icon = document.querySelector("#eye");
    if(password.type == "text"){
      password.setAttribute("type","password");
      eye_icon.className="fa fa-eye";
    }
    else {
      password.setAttribute("type","text");
      eye_icon.className="fa fa-eye-slash";

    }
  }

let notify = document.querySelector(".notify");
function getData(event){
    event.preventDefault();
    let user = document.querySelector(".login_user");
    let pass = document.querySelector(".login_password");
    if(localStorage.getItem(user.value)){
      /** user found */
      let data = JSON.parse(localStorage.getItem(user.value));
      if(pass.value == data['password']){
        /** password match */
        notify.textContent="login success !"
        notify.className="notify green";
        sessionStorage.setItem("_auth_",user.value);
        window.location.href="fbook.html";



      }
      else{
        /** password not match */
        notify.textContent="password not match !"
        notify.className="notify red";


      }


    }
    else{
      /** user not found */
      notify.textContent="user not found !"
      notify.className="notify red";

    }


   
}