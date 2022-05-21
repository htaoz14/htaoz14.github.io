function phuongTrinh(a , b){
  
    
if ( a == 0 && b == 0){
    let pt1 = a*x + b;
   console.log(`vô số nghiệm `)
}
if ( a == 0 && b != 0){
    console.log(`vô nghiệm `)
}
if ( a != 0 ) {
    const  x = -b/a
    console.log(`x=${x}`);
    }
    
}
console.log(phuongTrinh(0 , 5))
console.log(phuongTrinh(10 ,6))
