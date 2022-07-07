//Yêu cầu
//Sử dụng Javascript để thực hiện các công việc sau

//Một tính năng mới vào gói Pro: ‘24/7 Phone support’




const support = document.createElement("li")
support.innerText = '24/7 Phone support'
console.log(support)
document.querySelector("#pro-plan ul").appendChild(support)



//Dổi vị trí 2 card pricing (pro, basic) => (basic, pro)
const cards = document.querySelectorAll(".col-md-4")
const row = document.querySelector(".row")
row.innerHTML = ""
row.appendChild(cards[1])
row.appendChild(cards[0])

//Trong gói Pro hãy cập nhật nút ‘Get Stasrted’ hiện tại thành màu xanh có màu background: #0984e3, có chữ màu #fff và có dòng chữ ‘Buy Now’
const pro = document.querySelector("#pro-plan button")

pro.innerText = "Buy Now"

pro.style.backgroundColor = "#0984e3"
pro.style.color = "#fff"

// Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%
const header  = document.querySelector("#pro-plan h3")
header.innerText = "Pro Thêm 25% data lưu trữ"
const header1 = document.querySelector("#basic-plan h3")
header1.innerText = "Basic Thêm 50% data lưu trữ"

