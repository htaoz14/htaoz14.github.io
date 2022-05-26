//Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó

//Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120
function calculateFactorial(a){
    let sum = 1;
    for ( let i = 1  ; i <= a ; i++){
        sum = sum * i;

    }
    return sum
}
console.log(calculateFactorial(5))
 //Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó

// Ví dụ: reverseString(‘hello’) => olleh
function  reverseString(str){
let  pos = ""
 for( let i = str.length -1 ; i >=0 ; i-- ){
 pos += str[i]
 }
 return pos;
}
console.log(reverseString('Hello'))
//Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào

//Ví dụ: translate(‘VN’) => “Xin chào”
//translate(‘EN’) => “Hello”
 
     function translate(code){
         switch(code){
            case 'VN' :{
                console.log(`Xin chao`)
                break;
            } 
            case 'JPN' : {
                console.log("konichiwa")
                break;
            }
            case 'EN' : {
                console.log("Hello")
                break;
            }
            default : {
                console.log("tim it thoi met v")
            }
         }
     }
     console.log(translate(`VN`))

 //Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.

//Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…”
 function subString()