const inpFirst = document.getElementById("inpFirst");
const inpLast = document.getElementById("inpLast");
const inpEmail = document.getElementById("inpEmail");
const confn =document.getElementById("confirm");
const check = document.getElementById("check");
const btnSub = document.getElementById("btn");

btnSub.onclick=function() {
const key = inpFirst.value;
const value = inpLast.value;



if (key&&value) {
    localStorage.setItem(key,value);
    
   
}


        for (let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);

    }

   }
   check.onclick=function() {
    const key= inpEmail.value;
    const value= confn.value;    
    
    
    if (key&&value) {
        localStorage.setItem(key,value);
      
       
    }
    
    
            for (let j = 0; j < localStorage.length; j++){
                const key = localStorage.key(j);
                const value = localStorage.getItem(key);
    
        }
    
       }
    



    