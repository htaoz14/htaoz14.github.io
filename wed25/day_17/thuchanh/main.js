//Yêu cầu
//Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const heading = document.querySelector('#heading')
heading.style.color = "red";
heading.style.textTransform = "uppercase"

//Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const paras = document.getElementsByClassName("para")
for ( let  i = 0 ; i < paras.length ; i++){
    paras[i].style.color = 'blue'
    paras[i].style.fontSize = "20px"
}



//Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
const link = document.createElement("a")
link.innerText = "trang facebook"
link.href = "https://www.facebook.com"
const content = document.querySelector(".content")
document.body.insertBefore(link,content)


//Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const title = document.getElementById("title")
let newtitle = document.createElement("h2")
newtitle.innerText = "Đây là thẻ tiêu đề"
content.replaceChild(newtitle,title)

//Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
const description = document.querySelector(".description")
description.classList.add('text-bold')


//Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
const para3 = document.querySelector(".para-3")
let button = document.createElement('button')
button.innerText = "click me"
document.body.replaceChild(button,para3)
//Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const para2 = document.querySelector(".para-2")
const para2Copy = para2.cloneNode(true)
para2Copy.innerText = "ducanh"
para2.insertAdjacentElement("afterend",para2Copy)

//Xóa thẻ có class=“para-1”
document.querySelector(".para-1").remove()