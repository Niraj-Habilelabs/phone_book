let notify = document.querySelector(".notify");
let loginEmail = sessionStorage.getItem("_auth_");

/**  data fetch  */
function dataFetch(){
  let obj = localStorage.getItem("data");
  let table = document.querySelector(".getTable");
  if(obj && JSON.parse(obj)[loginEmail]){
        let allData = JSON.parse(obj);
        let loginData = allData[loginEmail];
        loginData.forEach((element,index,arr)=>{
          table.innerHTML += `<tr class="contact_tr">
          <td>${++index}</td>
          <td>${element['yourname']}</td>
          <td>${element['contact']}</td>
          <td>${element['relation']}</td>
          <td><i class="fa fa-edit edit_icon" style="color:green;font-size:24px;cursor:pointer;"></i></td>
          <td><i class="fa fa-trash delete_icon" style="color:red;font-size:24px;cursor:pointer;"></i></td>
        </tr>`;
        })

        deleteContact();
        editFeature();
  }

}

/** login or not check  */
if(sessionStorage.getItem("_auth_")){
  dataFetch();
}

/** delete feature  */
function deleteContact(){
  let obj = localStorage.getItem("data");
  let table = document.querySelector(".getTable");
  if(obj && JSON.parse(obj)[loginEmail]){
        let allData = JSON.parse(obj);
        let loginData = allData[loginEmail];
     /*** delete feature  */
     let delete_icon = document.querySelectorAll(".delete_icon");    
     delete_icon.forEach((deleteIcon,index)=>{
       deleteIcon.onclick=function(){
        let tr = this.parentElement.parentElement;
             loginData.splice(index,1);
             allData[loginEmail] = loginData;
             localStorage.setItem("data",JSON.stringify(allData));
             tr.remove();
              /** number format  */
              let data_check = document.querySelectorAll(".contact_tr");
              data_check.forEach((element,index)=>{
                element.querySelector("td").innerText=++index;

              })


       }

     });
    }
   
}

/** edit feature  */
function editFeature(){
  let edit_icon = document.querySelectorAll(".edit_icon");
  edit_icon.forEach((element,index,arr)=>{
    element.onclick=function(){
      let tr = this.parentElement.parentElement;
      let td = tr.querySelectorAll("td");
      if(this.className=="fa fa-edit edit_icon"){   
        td[1].setAttribute("contenteditable",true);
        td[2].setAttribute("contenteditable",true);
        td[3].setAttribute("contenteditable",true);
        td[1].focus();
        this.className = "fa fa-save edit_icon";

      }
      else{

        if(td[1].innerText!=="" && td[2].innerText!=="" && td[3].innerText!==""){
          td[1].setAttribute("contenteditable",false);
          td[2].setAttribute("contenteditable",false);
          td[3].setAttribute("contenteditable",false);
          let obj = JSON.parse(localStorage.getItem("data"));
          let loginData = obj[loginEmail];
        
          loginData[index]['yourname'] = td[1].innerText;
          loginData[index]['contact'] = td[2].innerText;
          loginData[index]['relation'] = td[3].innerText;

          obj[loginEmail] = loginData;
          localStorage.setItem("data",JSON.stringify(obj));
          this.className="fa fa-edit edit_icon";


        }


        else{
          alert("please fill all field");
        }



      }


    }
  })

}


function validate(check, obj) {

  if (check['valid']) {
    /** validation is correct */
    /** check use exits */
    let table = document.querySelector(".getTable");
    let data = localStorage.getItem("data");
    let length = document.querySelectorAll(".contact_tr").length == 0 ? 1 : document.querySelectorAll(".contact_tr").length+1;
    if (data) {
      /** exist data key in database */
      let allData = JSON.parse(data);
      /** user already stored Data or not  */
      if (allData[loginEmail]) {
        let check = true;
        allData[loginEmail].forEach(element => {
          if (element['contact'] == obj['contact']) {
            check = false;
          }
        });

        if (check) {
          /* contact already not exists */
          allData[loginEmail].push(obj);
          localStorage.setItem("data", JSON.stringify(allData));
          table.innerHTML += `<tr class="contact_tr">
        <td>${length}</td>
        <td>${obj['yourname']}</td>
        <td>${obj['contact']}</td>
        <td>${obj['relation']}</td>
        <td><i class="fa fa-edit edit_icon" style="color:green;font-size:24px;cursor:pointer;"></i></td>
        <td><i class="fa fa-trash delete_icon" style="color:red;font-size:24px;cursor:pointer;"></i></td>
      </tr>`;
        }
        else {
          /* contact already exists */
          notify.textContent = "Contact already exists !";
          notify.className = "notify red";
        }


      }

      else {
        /**user not stored */
        allData[loginEmail] = [obj];
        localStorage.setItem("data", JSON.stringify(allData));
        table.innerHTML += `<tr class="contact_tr">
        <td>${length}</td>
        <td>${obj['yourname']}</td>
        <td>${obj['contact']}</td>
        <td>${obj['relation']}</td>
        <td><i class="fa fa-edit edit_icon" style="color:green;font-size:24px;cursor:pointer;"></i></td>
        <td><i class="fa fa-trash delete_icon" style="color:red;font-size:24px;cursor:pointer;"></i></td>
        </tr>`;

      }



    }
    else {
      /** not exists data key in database */
      let finalObj = {
        [loginEmail]: [obj]
      }

      /** database store process */
      localStorage.setItem("data", JSON.stringify(finalObj));
      table.innerHTML += `<tr class="contact_tr">
        <td>${length}</td>
        <td>${obj['yourname']}</td>
        <td>${obj['contact']}</td>
        <td>${obj['relation']}</td>
        <td><i class="fa fa-edit edit_icon" style="color:green;font-size:24px;cursor:pointer;"></i></td>
        <td><i class="fa fa-trash delete_icon" style="color:red;font-size:24px;cursor:pointer;"></i></td>
      </tr>`;
      notify.textContent = "Data Stored !";
      notify.className = "notify green";

    }




  }
  else {
    /** validation not correct */
    notify.textContent = check['field'] + "!";
    notify.className = "notify red";
  }

  deleteContact();
  editFeature();
}
function getData(event) {
  event.preventDefault();
  let check = { valid: true };
  let finalObj = {};
  let condition = {
    yourname: /^([A-Za-z0-9]+)$/,
    contact: /^\d{10}$/,
    relation: /^([A-Za-z0-9]+)$/,
  };
  for (let i = 0; i < event.target.length; i++) {

    if (condition[event.target[i].name]) {

      /** object prepare */
      finalObj[event.target[i].name] = event.target[i].value;

      /** validation check  */
      if (!condition[event.target[i].name].test(event.target[i].value)) {
        check['valid'] = false;
        check['field'] = event.target[i].name + " is not correct";
      }

    }
  }

  /** function call  */
  validate(check, finalObj);

  // let k = 0;
  // localStorage.setItem(k++, JSON.stringify(obj));
}




