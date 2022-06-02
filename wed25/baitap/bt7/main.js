//Bài 1: Tìm số lớn nhất trong mảng

let num = [6,7,8,4,2,3,9]
let nummax = Math.max(...num)
console.log(nummax)
 
//Tìm số nhỏ nhất trong mảng
let num1 = [6,7,8,4,2,3,9]
let nummin = Math.min(...num1)
console.log(nummin)

// Viết hàm cho phép truyền vào 1 mảng các số
//, kết quả trả về là 1 mảng mới với các số là số dư tương ứng
// khi chia mảng cũ cho 2
let num2 = [4,2,5,6,2,7]
let num3 = [];
function chiaMang(array){
for(let i in array){
  
    num3.push(array[i] % 2);
}
    return num3;

}
console.log(chiaMang(num2))
 //Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
 
 let str1 = [];
 function repeatString(str2){
     
     for ( let i = 0 ; i < 10 ; i++){
        
     str1.push(str2)
     }
     str3 = str1.toString().replaceAll(",","")
     
 
 return str3;
}
console.log(repeatString("a"))
// Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

//Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’
let str4 = [];
function repeatString1(str5){
    for (let i = 0 ; i < 10 ; i ++){
        str4.push(str5)
    }
    str6 = str4.toString().replaceAll(",","-")
    return str6;
}
console.log(repeatString1("a"))