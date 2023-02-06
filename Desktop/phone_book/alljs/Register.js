// let i = 0;
// let obj = [{}];
// i++;
let notify = document.querySelector(".notify");
function validate(check, obj) {

  if(check['valid']){
    /** validation is correct */
    /** check user already exists */
    if(localStorage.getItem(obj['mail'])){
      notify.textContent="user already exists !"
      notify.className="notify red";
    }
    else{
      /** user not exists */
        localStorage.setItem(obj['mail'],JSON.stringify(obj));
        notify.textContent="user successfully created !"
         notify.className="notify green";
    }
     
      
  }
  else{
    /** validation not correct */
    notify.textContent=check['field']+"!";
    notify.className="notify red";
  }
}
function getData(event) {
  event.preventDefault();
  let check = {valid:true};
  let finalObj = {};
  let condition = {
    yourname:/^([a-zA-Z0-9]+)$/,
    userid:/^([a-zA-Z]+)([0-9]+)$/,
    contact:/^\d{10}$/,
    password:/^([A-Za-z0-9]+){7,14}$/,
    mail:/([a-zA-z0-9]+)@([a-zA-z0-9]+)\.([a-zA-z0-9]+)/, 
  };
  for (let i = 0; i < event.target.length; i++) {

  if(condition[event.target[i].name]){

    /** object prepare */
    finalObj[event.target[i].name] = event.target[i].value;

    /** validation check  */
    if(!condition[event.target[i].name].test(event.target[i].value)){
      check['valid'] = false;
      check['field'] = event.target[i].name +" is not correct";
    }

  }
   // console.log("event.target[i].name :", event.target[i].name);
    // if (
    //   event.target[i].name == "userid" ||
    //   event.target[i].name == "contact" ||
    //   event.target[i].name == "password" ||
    //   event.target[i].name == "mail"
    // ) {
    //   if (event.target[i].name == "userid") {
    //     const format = /^([a-zA-Z0-9]+)$/;
    //     validate(event.target[i].value, format);
    //   }
    //   if (event.target[i].name == "contact") {
    //     const format = /^\d{10}$/;
    //     validate(event.target[i].value, format);
    //   }
    //   if (event.target[i].name == "password") {
    //     const format = /^[A-Za-z]\w{7,14}$/;
    //     validate(event.target[i].value, format);
    //   }
    //   if (event.target[i].name == "mail") {
    //     const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    //     validate(event.target[i].value, format);
    //   }i
    // } else {
    //   obj = event.target[i].value;
    //   // localStorage.setItem(i,event.target[i].value)
    //   //console.log(`${i} value = ${localStorage.getItem(i)}`)
    // }

    // localStorage.setItem(i,event.target[i].value)
    // console.log(`${i} value = ${localStorage.getItem(i)}`)
  }

  /** function call  */
  validate(check,finalObj );

  // let k = 0;
  // localStorage.setItem(k++, JSON.stringify(obj));
}
