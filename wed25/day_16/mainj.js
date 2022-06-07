// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.

// Hãy cẩn thận trường hợp trong mảng có nhiều số lớn nhất
function max2Numbers(array){
 let max1 = Math.max(...array);      // tìm max cho  mảng  của đề bài cho
 let newArr = array.filter((a) => a !== max1)     // dùng filter lọc qua các phần tử rồi các phần tử nào khác max1 sẽ cho vào mảng mới
 let max2 = Math.max(...newArr)     // tim max cho mảng thứ 2 sau khi bỏ giá trị lọc phần tử max1 ra ngoài
 console.log(max2)
}
const array1 = ([2, 1, 4, 3, 4])
max2Numbers(array1)    

// Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
    // // Ví dụ:
 // getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']) => ['aba', 'vcd'].
  function getStringHasMaxLength(array2){
      let max = array2.reduce((a,b) => Math.max(a,b.length) , 0);
      // dùng reduce duyệt các phần tử , so sanhs dộ dài rồi trả về đọ dài lớn nhất
      let arr1 = [];
      for(let i = 0 ; i < array2.length ; i++) {
          if (array2[i].length == max) {    // dùng vòng lặp  để duyệt qua tất cả các mảng nếu length = max thì push vào mảng mới
              arr1.push(array2[i])          }

      }
      return arr1;
  }
  const arr2 = ["aba" , "aa" ,"ad" , "vcd" ]
  console.log(getStringHasMaxLength(arr2 ))





 // Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó
    function getRandomElement(arr){
        let i = Math.floor(Math.random() * arr.length ) // mỗi lần chay i sẽ cho ra ngẫu nhiên 1 phần tử ra
        return arr[i]
     }
     console.log(getRandomElement([3, 7, 9, 11]))


//Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó
function similarity(arr1,arr2) { // 
    let arr3 = [] 
    for ( let i = 0 ; i < arr1.length ; i++){
        if ( arr2.includes(arr1[i]) == 1) { // dùng includes để tìm trong mảng có hay không
            arr3.push(arr1[i]); // trả  về 1 mảng mới
        }
    }
    return arr3
}
console.log(similarity([1, 2, 3], [1, 2, 4]))
// Bài 5 (2 điểm). Viết function truyền vào 2 tham số:

// Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
// Tham số 2: Là 1 số x <= 1000
function getTime(t,x){
    let arr = time.split(":");
    let s  = arr[0] * 3600 + arr[1] *60 + arr[2] * 1 + x * 1;
 let hours = mat.floor(s / 3600);
 let minutes = Math.floor(s / 60) % 60;
 let second = s % 60;
 return [ hours , minutes , second]
 
}






let users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

// Bia 6 Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true

   // Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
function age25StatusTrue(array){
    return array.filter((a) => a.age > 25 && a.isStatus == true) // filter loc qua phần tử thỏa mãn và trả về mảng mới

}
console.log(age25StatusTrue(users))

function sortAge(array){
    return array.sort((a,b) => a.age - b.age) // dung sort sắp xếp lại mảng a-b > 0 thì xếp trước
}
console.log(sortAge(users))