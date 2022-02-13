window.onload = () =>{

    const content = document.getElementById("content3")
    const nums = document.querySelectorAll(".num");
    const equal = document.querySelector(".equal");
    const contentEqual = document.querySelector("#content2");
    const operators = document.querySelectorAll(".operator");
    const deleteAc= document.querySelector(".delete");
    let res = 0;
    let res2 = 0;
    let operator = "";
    var counter = 0;


    for (let i = 0; i < nums.length; i++) {
        nums[i].addEventListener("click", () => {
            
            if (operator == "" && counter == 0) {
                res += nums[i].innerHTML;
                content.innerHTML += nums[i].innerHTML;
            } else {
               res2 += nums[i].innerHTML;
               content.innerHTML += nums[i].innerHTML;

            }  ;    
           
        });
        
    }

    for (let j = 0; j < operators.length; j++) {
         operators[j].addEventListener("click", ()=>{
             counter += 1
             contentEqual.innerHTML +=  content.innerHTML + operators[j].innerHTML;
             content.innerHTML = "";
             operator = operators[j].innerHTML;
             
         });
        
    }
  
      
     
     equal.addEventListener("click",()=>{
         res = parseInt(res)
         res2 = parseInt(res2)
        switch (operator) {
            case "x":
                res *= res2
                break;
            case "/":
                res2 !=0 ? res /= res2 : alert("zero divison error")
                res = res.toFixed(2)
                break;
            case "+":
                res += res2
                break;
            case "-":
                res -= res2
                break; 
            case "%":
                nums.disable = true;
                res = res / 100
                break;
        }
        contentEqual.innerHTML = res;
        content.innerHTML = "";
        res2 = 0;
        counter = 0;
    });


     deleteAc.addEventListener("click", () =>{
        content.innerHTML = "";
        contentEqual.innerHTML = "";
        res = 0;
        res2 = 0;
        counter = 0;
        operator = "";

     });

    }
