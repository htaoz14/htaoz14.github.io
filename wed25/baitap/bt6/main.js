// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
//Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

//Ví dụ:

//checkStringExist(“i love you”, “you”) => true
//checkStringExist(“i love you”, “hate”) => false
function checkStringExist(string,string1){
    let i = string.indexOf(`${string1}`);
    if ( i == -1){
        return false;
    } else {
        return true;
    }
}
console.log(checkStringExist("i love you", "you" ))
console.log(checkStringExist('i love you', 'hate'))




//Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên
function shortenString(string){
if(string.length <= 8){
  return string;

}else {
  let newString = ["..."];
  for (var i = 7 ; i >= 0 ; i --){
   newString.unshift(string[i]);
  }
  let result = newString.toString();
  return result.replace(/,/g, "");
}

}
//function shortenString(str){
  //if(str.length > 8) {
    // return str.length()
  //}
//}
console.log(shortenString("Xin chào các bạn"))
console.log(shortenString("Xin chao"))
//Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.

//Ví dụ

//“Race car” => true,
//“hello world” => false.
//tach thanh mang ( slip ) _- dao nguoc chuoi ( reven)
function doiXung(string) {
  let str = string.replace(/ /g, "").toLowerCase();
  let str2 = [];
  for(let i = str.length -1 ; i >= 0 ; i--){
    str2.push(str[i]);
  }
  let str3 = str2.toString().replace(/,/g, "");
  if ( str3 === str){
    return true;
  } else {
    return false;
  }

  
}
console.log(doiXung("Race car"))
console.log(doiXung('hello world'))
//Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

//Ví dụ:

//“HELLO world” => “hello_world”
//“Xin Chào Các BẠN” => “xin_chào_các_bạn”
function snake_Case(string){
  let str = string.toLowerCase();
  return str.replace(/ /g, "_")
  // str.replaceAll("","")
}
console.log(snake_Case("HELLO world"))
console.log(snake_Case("Xin Chào Các BẠN"))
// Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

//Ví dụ

// 53751 -> 13557
// 14350 -> 10345
// 203950 -> 200359