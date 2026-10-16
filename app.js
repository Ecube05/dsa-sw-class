function countEvenOdd(numbers){
    let even = 0;
    let odd = 0;

    for(
        let x = 0;
        x < numbers.length;
        x++
    ){
        if(numbers[x] % 2 === 0){
            even++
            
            
        }  else{
             odd++
        }
    }
    console.log("There are",even,"even numbers");
console.log("There are",odd,"odd numbers"); 
}


countEvenOdd([8,7,10,13,20,25,31,42,51]);