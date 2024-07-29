function check() {
    let fact  = document.getElementById("input").value;
    fact = parseInt(fact);
    let ans = document.getElementById("result")

  
    let result = 1;
    let i = 1;
    while(i <= fact) 
    {
      result = result * i;
      i++;
    }
  
    ans.innerHTML = `Factorial of ${fact} is: ${result}`;
  }