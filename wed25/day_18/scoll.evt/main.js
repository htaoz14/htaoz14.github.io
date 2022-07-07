const btnTop = document.querySelector(".btn-top")
window.addEventListener("scroll" , function() {
// moc hien thi la : 400
if(document.documentElement.scrollTop >300){
    btnTop.style.display = "block"
} else {
    btnTop.style.display ="none"
}
})
btnTop.addEventListener("click",function(){
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
})


const input = document.querySelector("input")
const button = document.querySelector("button")

if ( input.typ

)
