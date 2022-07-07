const inputEl = document.querySelector("input")
const textEl = document.querySelector("span")
 inputEl.addEventListener("keydown" , function(event){
    if(event.keyCode == 13){
      //  let value = inputEl.value;
      let value = event.target.value;
      if(value ==""){
        alert("Noi dung khong duoc de trong")
        return
      }
      textEl.innerText = value;
      inputEl.value =""
    }
 })