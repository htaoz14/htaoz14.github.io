// khai bao object
let emty0bj = {}
//khai bao object co gia tri 
// method hanh vi hanh dong
// propeti : dac diem tinh chat

let student = {
    id : 1,
    name : "Nguyen Van A",
    email : "cscs@email.com",
    status : false,
    address : {
        city : "Ha Noi",
        district : "Thanh Xuan"

    },
    gOtoschool : function(){
        console.log("Di  hoc")
    },
    //gOtoschool () {
    //    console.log('Di hoc')
    //}
    showInfo : function() {
        console.log(`Name: ${this.name},email : ${this.email} , poin : ${this.poin} `)
    }
}
// lay ra thong tin
console.log(student.email);
console.log(student.address.city);
// set lai thong tin
student.email = " scascascsac@gmail.com"
student.address.district = " CMMCM"
console.log(student)
// them thuoc tinh
student.poin = 9
console.log(student)
//xoa thuoc tinh
delete student.status
console.log(student)
// goi phuong thuc
student.gOtoschool
student.showInfo
// phuong thuc
//1 lay danh sach key => tra ve mang
console.log(Object.keys(student))
 //duyet key de in ra value tuong ung
let keys = Object.keys(student)
keys.forEach(key => {
    console.log(student[key])
    
})
// su dung for...in
for(const key in  student ) {
    console.log(student[key])
}
//2. lay danh sach value => tra ve mang
console.log(Object.values(student));
// 3 kiem tra 1 key co ton  tai trong object hay khong => true/false
console.log(student.hasOwnProperti('Name'))
