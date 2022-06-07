//Bài 1: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?

//checkElementExist([1,2,3,4,5], 5) => true
//checkElementExist([1,2,3,4,5], 6) => false
function checkElementExist(ch1,ch2){
    return ch1.includes(ch2)
}
console.log(checkElementExist([1,2,3,4,5], 5))
console.log(checkElementExist([1,2,3,4,5], 6))
//Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào

//getElementGreater([1,2,3,4,5], 3) => [4,5]
//etElementGreater([1,2,3,4,5g], 5) => []
function getElementGreater(ch3,ch4){
    
    return ch3.slice(ch4)
}
console.log(getElementGreater([1,2,3,4,5], 3))
console.log(getElementGreater([1,2,3,4,5], 5) )
//Bài 3: Viết function để tạo mã màu HEX ngẫu nhiên.

//randomHexCode() => #728a98
// randomHexCode() => 
let num = [0,1,2,3,4,5,6,7,8,9,"a","b","c","e","f"]
let ma = ["#"]
function randomHexCode(){
    
    for(let i = 0 ; i < 6 ; i++){
        ma += num[Math.floor(Math.random() * 4,294,976,296  ).toString(16)]
    }
return ma
}
console.log(randomHexCode())
//Bài 4: Viết function để tạo mã màu RGB ngẫu nhiên.

//randomRgbCode() => rgb(213,43,133)
//randomRgbCode() => rgb(12,32,122)
    