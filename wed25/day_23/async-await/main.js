let money = 30
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
//cách 1 Regular funtion
// async function demo(){}
// cách 2 function expresstion()
// const demo = async function() {}


// cách 3 : arrow function 
const buy = async () => {
    try {let res =
        await buyIphone()
     console.log(res)
     let res1 = await buyAirpods();
     console.log(res1)
        
    } catch (error) {
        console.log(error)
        
    }
    return "về nhà"
}
const data = buy();
console.log(data)
data.then(res => console.log(res))