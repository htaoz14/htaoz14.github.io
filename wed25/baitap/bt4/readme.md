## Scope có thể hiểu nôm na là “phạm vi sử dụng của biến 

### Global scope là 1 biến toàn cục nếu biến nằm  ngoài function 
*vd : let name = "Duc Anh"
let age = "21"
console.log(name);
console.log(age)*
### Function scope là 1 biến được đinh nghĩa bên trong function 
*vd : function sayHeloo(){
    let name = "Duc Anh"
    console.log(`name`) // Duc Anh
}
sayHello(); // Duc Anh
console.log(name) // loi*
### Block scope la 1 bien dươc dinh nghia ben trong {} 
*vd : { let name = "Duc Anh"
console.log(name) // Duc Anh*

}
### nếu 1 biến không có từ khóa khai biến thì sẽ trở thành biến toàn cục ( global) 
*vd : 
function sayHello() {
    number = 10;
    console.log(number);
}

sayHello() // 10

console.log(number); // 10*


## Function (hàm) là tập hợp các đoạn code dùng để thực hiện một tác vụ cụ thể nào đó. 

### Cú pháp định nghĩa function

*function functionName(para_1, ..., para_n) {
 // code thực thi function
}

Thực thi function

functionName(para_1, ..., para_n)*
 ### Function không có tham số

*function sayHello() {
    console.log("Xin chào các bạn");
}

sayHello();*
 ### function có tham số
*Với function kiểu này có thể có một hoặc nhiều tham số (không nên quá 3 tham số)

 Ví dụ function có 1 tham số
function sayHello(name) {
    console.log(`Xin chào ${name}`);
}
sayHello("Bùi Hiên");*

  ### Ví dụ : function có 2 tham số
*function sayHello_1(name, city) {
    console.log(`Tôi tên là ${name}, quê tôi ở ${city}`);
}
sayHello_1("Bùi Hiên", "Thái Bình");*
### Function trả về kết quả
*Để trả về kết quả, sử dụng từ khóa return

function sum(a, b) {
    return a + b;
}

let data = sum(3, 4);
console.log(data);*

### Nếu muốn kiểm tra nhanh kết quả của function có thể sử dụng luôn console.log
*console.log(sum(4, 5));
Chú ý : Những câu lệnh đằng sau từ khóa return sẽ không được thực thi
function sum(a, b) {
    return a + b;
    console.log(a); // không được thực thi
    console.log(b); // không được thực thi
}
 Function không trả về kết quả 
 Đối với function không có từ khóa return thì coi như function đó không trả về kết quả*
  ## Phân biệt tham số (parameter) và đối số (argument)
### Tham số (parameter) là biến trong khai báo hàm.

 #### Đối số (argument) là giá trị thực của biến này được truyền vào hàm.
*vd : function sum(a,b){ // a và b ở đây là tham số parameter
    return a+b;
}
console.log(sum(a,b) // a và b ở đây đối số argument*

#### Cho phép khởi tạo function với những default value nếu như chúng được định nghĩa sai.

*Khi sử dụng chức năng này sẽ giúp function dễ control và ít error hơn.

function sayHello(name = "Lan Hương") {
    console.log(`Xin chào ${name}`);
}

sayHello(); // Lan Hương
sayHello("Bùi Hiên"); // Bùi Hiên*
## Kiểu dữ liệu Boolean
*Giá trị của kiểu dữ liệu này chỉ có thể là true hoặc false

Ví dụ

let a = true;
let b = false;
let c = !a;
let d = !b;*

## Xác định giá trị Boolean
*Để xác định giá trị boolean cho biến, biểu thức,… ta sử dụng hàm Boolean()

Ví dụ

let a = 5;
console.log(Boolean(a));

let b = 6;
let c = 10;
console.log(Boolean(b < c));

Truthy value là những giá trị mà khi ép kiểu về Boolean thì sẽ cho ra giá trị là true.

Ngược lại, Falsy value là những giá trị mà khi ép kiểu về Boolean thì cho ra giá trị là false

Có 6 giá trị sau được coi là falsy : false, 0, NaN, ‘’, null, undefined
Các giá trị còn lại, ngoài các giá trị trên được gọi là truthy*

## Câu lệnh if - else if - else
#### Chỉ định một điều kiện mới nếu điều kiện đầu tiên là sai

 *Cú pháp
if (điều kiện 1) {
    // Code được thực thi nếu điều kiện 1 đúng
} else if (điều kiện 2) {
    // Code được thực thi nếu điều kiện 1 sai và điều kiện 2 đúng
} else {
    // Code được thực thi nếu điều kiện 1 và 2 sai
}

 Ví dụ
let hour = 6;
if (hour < 12) {
    console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}*
## Sự khác biệt giữa == và ===
### == và === đều được sử dụng để so sánh

*Tuy nhiên cần chú ý điểm sau khi sử dụng để thực hiện so sánh

Toán tử == so sánh trừu tượng (abstract equality), tức là nó thực hiện các chuyển đổi loại cần thiết trước khi so sánh (so sánh về mặt giá trị)

Còn toán tử === so sánh nghiêm ngặt (strict equality), nghĩa là nó sẽ không thực hiện chuyển đổi loại. Do đó nếu hai giá trị không cùng loại, thì khi so sánh, kết quả sẽ trả về false (so sánh về mặt giá trị và kiểu dữ liệu)

Ví dụ

let a = 2;
let b = "2";

// Sử dụng toán tử ==
console.log(a == b) // true
// Đúng vì b khi thực hiện so sánh sẽ được convert sang dang số (2) 2 == 2 --> true

// Sử dụng toán tử ===
console.log(a === b) // false
// Sai vì kiểu dữ liệu của a là number và của b là string*
## Toán tử 3 ngôi
### Câu lệnh if :
*Thực hiện câu lệnh trong if nếu điều kiện cho trước là đúng.

// Cú pháp
if (điều kiện) {
    // Code được thực thi nếu điều kiện đúng
}

// Ví dụ
let hour = 6;
if (hour < 10) {
    console.log("Good morning!");
}*
### Câu lệnh if - else
*Nếu điều kiện đúng thực hiện câu lệnh trong if, ngược lại nếu điều kiện sai thì hiện câu lệnh trong else.

// Cú pháp
if (điều kiện) {
    // Code được thực thi nếu điều kiện đúng
} else {
    // Code được thực thi nếu điều kiện sai
}

// Ví dụ
let hour = 6;
if (hour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}*
### Câu lệnh if - else if - else
*Chỉ định một điều kiện mới nếu điều kiện đầu tiên là sai

// Cú pháp
if (điều kiện 1) {
    // Code được thực thi nếu điều kiện 1 đúng
} else if (điều kiện 2) {
    // Code được thực thi nếu điều kiện 1 sai và điều kiện 2 đúng
} else {
    // Code được thực thi nếu điều kiện 1 và 2 sai
}

// Ví dụ
let hour = 6;
if (hour < 12) {
    console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}*



