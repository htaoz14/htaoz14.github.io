const sayHello = () => {
    alert("XIn chao cac bạn1 ")
}

// sử dụng proprety
const btn2 = document.getElementById("btn-2")
// btn2.onclick = function() {
 //   alert("XIn chao cac bạn 2 ")
//}
const sayHello2 = () => {
    alert("XIn chao cac bạn 2 ")
}
btn2.onclick = sayHello2
//  Sử dụng addEventListener
const btn3 = document.getElementById("btn-3")
btn3.addEventListener("click",function() {
    alert("XIn chao cac bạn 3 ")
})