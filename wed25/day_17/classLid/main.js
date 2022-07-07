const heading = document.getElementById("heading")

//xem ds cac phann tu
console.log(heading.classList)
// them class
heading.classList.add("text-big", " text-center")

// xoa class 
heading.classList.remove("text-big" , " text-center")
// kiem tra 1 phan tu co ton tai hay khong? ( true,false)
console.log(heading.classList.contains("text-red"))
console.log(heading.classList.contains("text-big"))

//tongle
// neu co class thi xoa di
// khong co class  thi them vao


//lặp đi lặp lại 1 công việc sau 1 khoảng thời gian nhất định
// parameter 1 : funtion (cv)
// parameter 2 : time (ms)

//setInterval(function(){
   // heading.classList.toggle("text-red")

//},100)
// delay 1 khoảng thời gian sau đó mới thực hiện công việc
// setTimeout(function(){
   // heading.classList.toggle("text-red")
// },3000)
// thực hiện đếm ngược thời gian đếm ngược từ 10->0
// kết thúc thì hiển thị ra 1 message

let time = 10
let interval = setInterval(function(){
    time--;
    document.querySelector(".time").innerText = `${time}`
    if(time==0){
        //dừng quá trình lặp lại 
        clearInterval(interval)
        document.
    }
},1000)