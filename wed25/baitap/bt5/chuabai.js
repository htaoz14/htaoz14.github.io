//function repeatString(str,count){
  //  let res = str;
    //for (let i = 0 ; i < count; i++){
      //  res += "-" + str;
    //}
    //return res;



//}
//console.log(repeatString('a',5))
//function sum0to100(){
   // let sum = 0
  //  for ( let i = 0;i <= 100; i++) {
       // if (i %5 ==0){
       //     sum +=
     //   }
     //   return sum;
   // }
  //  console.log(sum0to100())
//}

//function volum(r){
   // let v = (4 *Math.PI *r*r*r) / 3
  //  return v;
//}
//console.log(volum(4))

//function sum(num1,num2){
  //  let max = Math.max(num1,num2);
   // let min = Math.max(num1,num2);
    //let total = 0;
    //for ( let i = min + 1; i < max ; i ++){
    //    total += i;
    //}
    //return total;
//}
//console.log(sum(3,8));
//console.log(sum(8,3))
function isPrime(number){
    if (number <2){
        return false;
    }
    for ( let i = 2; i < number ;i++){
        if(number % i ==0){
            return false;
        }
        return true;
    }
}
console.log(isPrime(0))
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(11))
console.log(isPrime(10))
//function repeatString(a){
   
   // let repeat = "";
  //  for (let  i = 0 ;i <0 ; i++ ){
   //  if (  i == 0 ){ 
    //     repeat += `${a}`
   //  } 
 //    else {
  //      repeat += `${a}-`
    // }
 //   }
   //  console.log( repeat )
         
    

 //    }
   
    

//repeatString(`5`)
function repeatString01(str) { 
  let repeat = "";
  for ( let i = 0 ; i < 9; i++){
    repeat += `${str}-`
  }
  repeat += str;
  return repeat;
}
console.log(repeatString01("a")) 
//function repeatString(a) {
 
//  let repeat = "";
//  for ( var i = 0; i <10; i++) {
//    repeat += ${a}
//  }

 
//return repeat ;
//}

//console.log(repeatString('4'))


//function repeatString01(str) { 
// let repeat = "";
// for ( let i = 0 ; i < 9; i++){
//   repeat += `${str}-`
// }
// repeat += str;
//  return repeat;
//}
//console.log(repeatString02("a")) 

function tongNt(number) {
let sum = 0;
for ( let i = 2; i <= number; i++){
  if(isPrime(i)){
    sum += i;
  }
return sum;
}
}
console.log(tongNt(8))

function sumWish(number) {
let sum = 0;
for ( let i = 1; i <= number; i++){
  sum += i
  
}
return sum;
}
console.log()