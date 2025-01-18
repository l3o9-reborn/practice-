function findFizzNumber(){
    let inputField=parseInt(document.getElementById("input_field").value);
    let value=document.getElementById("fizz_number");

    if (isNaN(inputField) || inputField <= 0) {
        value.textContent = "Please enter a valid positive number!";
        return;
    }

    for(let i=1; i<=inputField; ++i)
    {
        setTimeout(()=>{
            if(i%3==0 && i%5==0)
                value.textContent="FizzBuzz"
            else if(i%3==0)
                value.textContent="Fizz"
            else if(i%5==0)
                value.textContent="Buzz"
            else
                value.textContent= i
        }, i*1000);
    }
    console.log(inputField);
    console.log(value);

}