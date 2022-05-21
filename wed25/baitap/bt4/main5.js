function chiSo(m,kg){
    if (m > 0 && kg > 0 ){
        let Bmi = m / Math.pow(kg,2);
        console.log(`Chỉ số BMI của bạn là : `);
        return Bmi;
    }
    


}
console.log(chiSo(63,1.75))
console.log(chiSo(0,0))