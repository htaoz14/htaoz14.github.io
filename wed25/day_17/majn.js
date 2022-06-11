// truy cập thông qua id
const heading = document.getElementById("heading")
console.log(heading)
// truy cập thông qua tag  name
// HTMLCollection -> gioongs như mảng nhưng bản chất không phải là mảng ( là tập hợp  các Node ở dạng Element Node)
//Node : element node, text node , comment node , attribute Node,...
const paras = document.getElementsByTagName("p")
console.log(paras)
console.log(paras[0]); // truy cập para1
console.log(paras.length);
// duyệt HTMLCollection
for ( let i = 0 ; i > paras.length ; i++) {
    console.log(paras[i])
    paras[i].style.color = 'blue';
}
Array.from(paras).forEach(element => {
    console.log(element)
    
});
// truy cập thông qua class name
const paraClassName = document.getElementsByClassName("para")
console.log(paraClassName)

// truy cap thông qua CSS selector
const h1 = document.querySelector("#heading")
console.log(h1)
heading.style.color = "red";
heading.style.backgroundColor = "black";

const para1 = document.querySelector("p")
console.log(para1)


const para2 = document.querySelector('.para')
console.log(para2)

const para3 = document.querySelector("body p:nth-child(4) ") //(.para + .para)
console.log(para3)

const  ul2 = document.querySelector(" body > ul")
console.log(ul2)


const ul1 = document.querySelector("ul") // (".box ul ")
console.log(ul1)


const  liall = document.querySelectorAll("body > ul li")
console.log(liall)

const li = ul2.querySelectorAll('li')
console.log(li)

const li1 = ul2 
console.log(li1)


// truy cập gián tiếp
const ul = para3.nextElementSibling // anh em đứng sau
console.log(ul)
const ul3 = ul2.parentElement // anh em đúng trước
console.log(ul3)
const liaa = ul2.lastElementChild
console.log(liaa)

// body có sắn 
document.body
console.log(document.body)


// lấy ra nội dung
console.log(heading.innerHTML);
console.log(heading.innerText)
console.log(heading.textContent)

console.log(ul1.innerHTML)
console.log(ul1.innerText)
console.log(ul1.textContent)




heading.innerHTML = "Xin chao"
heading.innerHTML = "<span> xin chao cach ban </span>"

heading.innerText = "<span>xin chao cac ban nho</span>"  //
heading.textContent = "<span>xin chao cac ban nho</span>" // chỉ hiểu text đơn thuần\

document.body.prepend(para1)
document.body.append(para1);

const box = document.querySelector(".box")
box.appendChild(para1)

document.body.insertBefore(para1,para3)

// tạo phần tử DOM
// ví dụ : Tạo ra thẻ  a ( google)
const link = document.createElement("a")
link.innerText = "Trang google "
link.href = "https://www.google.com.vn/?hl=vi"
console.log(link)
document.body.prepend(link)
document.body.appendChild(link)
document.body.insertBefore(link , ul2);


// tạo thẻ input có type = text , placeholder = enter name
// vị trí đằng trước para2
const input = document.createElement("input")
input.type = "text"
input.placeholder = "enter name"
console.log(input)
document.body.insertBefore(input, para2)

// document.body.insertAdjacentElement("afterbegin",link)
heading.insertAdjacentElement("beforebegin",link)


box.insertAdjacentElement("beforebegin", link)
para3.insertAdjacentElement("afterend",link)

box.insertAdjacentHTML("afterend", "<button> Click me </button>")


// sử dụng phòng lặp đẻ tạo nội dung và insert


let links = [
{
    link : "https://facebook.com/weakhero1st",
    title : "facebook"
},
{
    link : "https://www.instagram.com/",
    title : "instagram"
},
{
    link : "http://www.twister.com/",
    title : " twister"
}

]
// truy cập
const sociaMedia  = document.querySelector(".social-media")
// tạo thẻ -> chèn
//link.forEach(ele => 
   // {
//const link = document.createElement('a')
//link.innerText = ele.title;
//link.href = ele.link;
//sociaMedia.appendChild(link)
//})
 // c2 : insert trức tiếp html -> insertAdjaaacentHtml
 //link.forEach(ele=>{
   //  sociaMedia.insertAdjacentHTML("beforeend", `<a href ="${ele.link}">${ele.title}</a>`)
 //})
  //let html = ""
  //link.forEach(ele => {
     // html += `<a href="${ele.link"> ${ele.title}</a>`
  //})
  //
  // cach 4
  //link.forEach(ele=>{
    //  sociaMedia.innerHTML += sociaMedia.innerHTML + `<a href ="${ele.link}">${ele.title}</a>`
  //})
// thay thế
const h3 = document.createElement("h3")
h3.innerText = "Đây là thẻ h3"
document.body.replaceChild(h3,para3)
// sao chép
const cOOPyTrue = box.cloneNode(true);
const cOOPyfalse = box.cloneNode(false)
console.log(cOOPyTrue)
console.log(cOOPyfalse)

document.body.prepend