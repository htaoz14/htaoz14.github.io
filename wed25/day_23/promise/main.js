// promise : lời hứa
let promise = new Promise((resolve,reject) => {

})
console.log(promise)
// thành công
// lời hứa  : Cuối tuần nếu có tiền thì đi cks
let hasMoney = true
let promiseSucces = new Promise((resolve,reject) => {
if(hasMoney == true){
    resolve("Cuối tuần đi chơi")
}
})
console.log(promiseSucces)
// thất bại
// lời hứa : nếu cuối tháng có tiền thì trả nợ
hasMoney = false
let promiseError = new Promise((resolve,reject) =>{
if (hasMoney == false){
    reject("không có tiền trả nợ")
}
})
console.log(promiseError)
// ví dụ 2 
// lời hứa 1 : cuối năm nếu có  30 triệu thị  mua iphone 13 promax
// lời hứa 2 :sau khi mua iphone xong , nếu cón đủ 5tr thì mua airpods
let money = 40
const buyIphone = () => {
    return new Promise((resolve,reject) => {
if (money >= 30){
    resolve("đủ tiền mua iphone")
}
else {
    reject("không  đủ tiền cày tiếp")
}
    
    })
}
// console.log(buyIphone())
buyIphone()
.then(res => 
    {console.log(res)
  return  buyAirpods()
})
.then(res => console.log(res)) // kết quả trả về nếu thành công
.catch(error => console.log(error)) // kết quả trả về nếu thất bại
.finally(() => console.log("về nhà")) // chắc chắn thực hiện kể cả thành công hay thất bại

const buyAirpods = () => {
    return new Promise((resolve,reject) => {
if (money - 30 >=5){
    resolve("mua Aỉpods")
}
else {
    reject("không  đủ tiền mua Airpods cày tiếp")
}
    
    })
}
