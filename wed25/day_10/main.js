// định nghiaax funcion k tham số
function sayHello() {
    console.log("Xin chào ...")
}
sayHello();
//  định nghĩa funcion có tham số
function sayHelloWithName(name){
    console.log(`Xin chào ${name}`);
}
sayHelloWithName("Kontekawa");
sayHelloWithName("konbangwa");

function showInfo(name,year){
    console.log(`xin chao toi ten là ${name} toi nam nay ${2022-year} tuổi`);
}
showInfo("Đức",2001);
showInfo("kmm",2004);
//  function có trẩ về kết quả
// ví dụ : tính tổng 2 số a,b
// ruturn dùng để ngắt
function sum(a,b) {
    let result = a + b;
    // console.log(a);
    // console.log(b);
    return result;
}
let data = sum(3,4);
console.log(data);
console.log(sum(1,2));
console.log(sum(data,10));



// default parameter
function sum1(a = 10 ,b = 20){
    let result = a + b;
    // console.log(a);
    // console.log(b);
    return result;

}
console.log(sum1(3));
console.log(sum1()); console.log(sum1(5,6)) 

function sayHello1(){
    console.log("Xin chào các bạn.");
}
sayHello1();

function sayHello2(name1){
    console.log(`Xin chào các bạn ${name1}`);
}
sayHello2("Hong");

function infoo(addres,day){
    console.log(`tôi ở ${addres} , hôm nay ngày ${day}`)

}
infoo("Hà Đông",22);

function sam(a){
 let sum1 = a*a;
 return sum1;
}
console.log(sam(10))
 
function getCentury(year){
    let Century = "year"
    
    return Century;
}
let TK = year()/100+1;
console.log(year(TK))
// bieesn global : ddinhj nghia ben ngoai fuction
// let name="totototot"
