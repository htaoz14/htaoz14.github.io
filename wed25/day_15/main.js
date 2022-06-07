// khi chia mảng cũ cho 2
//let num2 = [4,2,5,6,2,7]
//let num3 = [];
//function chiaMang(array){
//or(let i in array){
  
//    num3.push(array[i] % 2);
//}
  //  return num3;

//}
//console.log(chiaMang(num2))
// map
function chiaMang1(array1){
    let result = array1.map(ele => ele % 2)

   return result
}
console.log(chiaMang1([1,2,3,4,5]))
// filter

