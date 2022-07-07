// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
const p = document.createElement("p")
p.id = "text"
p.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."
p.style.color = "#777"
p.style.fontSize ="2rem"
document.body.appendChild(p)
// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
const color = document.querySelectorAll(" ul li")
for ( let i = 0 ; i < color.length ; i++){
    color[i].style.color = "blue"
}
// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
// Sử dụng javascript để thực hiện những công việc sau

// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)

// Remove thẻ <li> 4

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const ul = document.querySelector("ul")
for( let i = 8 ; i <11 ; i++ ){
    let li = document.createElement('li')
    li.innerText = `Item${i}`
    ul.appendChild(li)
}
document.querySelectorAll("ul li ")[0].style.color = "red"
document.querySelectorAll("ul li")[2].style.backgroundColor = "blue"
document.querySelectorAll("ul li")[3].remove();
const newli = document.createElement("li")
newli.innerText = " li new"
document.querySelectorAll("ul li")[2].insertAdjacentElement("afterend",newli)


const list = document.querySelector("#list")
console.log(list)
const add = document.createElement("")
