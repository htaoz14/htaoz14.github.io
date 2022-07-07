//Yêu cầu
//Sử dụng Javascript để thực hiện các công việc sau

////Thêm 3 job bổ sung vào phần ‘job’ của trang bằng cách sao chép ‘job-card’ ban đầu.
const row = document.querySelector(".row")
const card = document.querySelector(".job-card")
const cardCopy = card.cloneNode(true)
const cardCopy1 = card.cloneNode(true)
const cardCopy2 = card.cloneNode(true)
row.appendChild(cardCopy)
row.appendChild(cardCopy1)
row.appendChild(cardCopy2)
//Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
cardCopy.querySelector("h3").innerText = "JavaScript Developer"
cardCopy1.querySelector("h3").innerText = "Java Developer"
cardCopy2.querySelector("h3").innerText = "Python Developer"
//Cập nhật Jobs listed thành tổng số công việc hiện có trong trang
const list = document.querySelector("#jobs-listed span")
const listht = document.querySelectorAll(".job-card")
list.innerText = listht.length
//Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi
// b1 : truy cap vao input roi them su kien keyup
const search = document.getElementById("search")
search.addEventListener("keyup" , function(){
    let value = this.value;
    console.log(value)
    Array.from(listht).forEach(job => {
        const locJob = job.querySelector("h3").innerText()
        if(locJob.toLowerCase().includes(value.toLowerCase())){
            job.style.display = "block";
        }
        else {
            job.style.display = "none";
        }
    })
})
//b2 : duyet mang  .job-card sau do truy cap vao h3
//b3 : chuyen ve chu thuong va tim kiem bang iclud neu co thi hien khong thi an di
//Bấm vào Nút “All jobs” để reset ô tìm kiếm và hiển thị ra tất cả các công việc