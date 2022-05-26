//Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.

//Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”
function repeatString(str){
  let roo = "";
  for ( let i = 0 ;i <10 ; i++){
    roo += `${str}`

  }
  return  roo;
}
console.log(repeatString('a'))
//Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

//Ví dụ: repeatString(“a”) => Kết quả trả về là “a-a-a-a-a-a-a-a-a-a”
function repeatString01(str){
  let ro = ""
  for ( let i = 0 ; i <9 ; i++){
    ro += `${str}-`
  }
  ro += str
  return ro;
}
console.log(repeatString01('a'))
//Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.

//Ví dụ: repeatString(‘a’, 5) => Kết quả trả về là ‘a-a-a-a-a’
function repeatString02(str,count){
  let res = str;
  for (i = 0 ; i < count -1 ; i++ ){
    res += "-" + str}
  return res;
}
console.log(repeatString02('a',5))
//Bài 4. Viết function tính tổng các số chia hết cho 5 từ 0 -> 100
function tinhTong(number){
  let a = 0
 for (let i = 0 ; i <= 100 ; i++){
   if (i %5 ==0){
     a += i
   }
  }
 return a ;
}
console.log(tinhTong())
//Bài 5: Viết function tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function theTich(r){
let v =(4* Math.PI *r*r*r)/3
return v;
}
console.log(tinhTong(3))
//Bài 6: Viết hàm function vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
function tongSonguyen(number1,number2){
  let max = Math.max(number1,number2);
  let min = Math.min(number1,number2);
  let total = 0;
  for ( let i = min +1 ; i < max ; i++){
 total += i;
  }
  return total;
}
console.log(tongSonguyen(3,8))
console.log(tongSonguyen(8,3))
//Bài 7: Cho 1 số, viết function kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function soNguyento(num){
  if ( num < 2){
    return false;
  }
  for ( let i = 2 ; i < num ; i++){
    if( num % i == 0){
      return false;
    }
      return true;
   
  }
}
console.log(soNguyento(5))
//Bài 8: Cho 1 số nguyên dương bất kỳ. Viết function tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
function timTong(num1){
let number = 0;
for ( let i = 2 ; i < num1;i++){
  if(soNguyento(i)){
    number += i
  }
}
return number;
}
console.log(timTong(8))
//Bài 9: Cho 1 số nguyên dương, viết function tính tổng tất cả các ước số của số đó.

function tongUoc(num2){
  let number = 0
  for ( i = 0 ; i <= num2 ; i++){
    if (num2 % i == 0){
    number += i
    }
  }
  return number;
}
console.log(tongUoc(10))
