// Yêu cầu:

//Lắng nghe sự kiện click ở 3 nút button theo 3 cách sau :

//Button “Change content” sử dụng “HTML-attribute”
//Button “Change color” sử dụng “DOM property”
//Button “Change background” sử dụng “addEventListener”
//Thực hiện các chức năng sau:

//Yêu cầu 1:

//Khi nhấn vào button “Change content” hiển thị một nội dung quote bất kỳ
const btn1 = document.getElementById("btn-1")
const arr = Math.floor(Math.random() * 4)
const ChangeContent = () => {
    alert(arr)
}
const btn2 = document.getElementById("btn-2")
const ChangColor1  = () => {
    alert (arr)
} 
btn2.onclick = ChangColor1
const btn3 = document.getElementById("btn-3")
const
//Yêu cầu 2:

//Khi nhấn vào button “Change color” thì thay đổi màu của thẻ p (sử dụng màu HEX - cần viết 1 function để random màu HEX)
const color = document.querySelector("p")
function randColor()
let ma = "#"




//Yêu cầu 3:

//Khi nhấn vào button “Change background” thì thay đổi màu background-color của thẻ p (sử dụng màu RGB - cần viết 1 function để random màu RGB)

