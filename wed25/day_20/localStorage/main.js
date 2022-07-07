if(typeof(Storage) !== "undefined") {
    console.log('Có hỗ trợ');
} else {
    console.log('Không hỗ trợ');
}
// lưu item
localStorage.setItem('name', 'Ngô B');
localStorage.setItem('number', '1');
localStorage.setItem('isStatus', 'false');
let numbers = [1,2,3,4,5,6]
let todos = [{
    id : 1,
    title : "ăn",
    status : true
},
{
    id : 2,
    title : "ngủ",
    status : false
},
{
    id : 3,
    title : "nằm",
    status : true
}]
localStorage.setItem("numbers",JSON.stringify(numbers))
localStorage.setItem("todos",JSON.stringify(todos))
// chuỗi JSON
// object => JSON : json.stringify();
// JsON =>  object : Json.parse();
// lấy ra dữ liệu
console.log(JSON.parse(localStorage.getItem("numbers")))
console.log(JSON.parse(localStorage.getItem("todos")))