const display = document.querySelector(".display");
const nums = document.querySelector(".nums");
let digit1=0;
let digit2=0;
let temp;
let dotCount=0;
let digitCount=0;
let opCount=0;
nums.addEventListener("click", (e)=>{
  if(e.target.matches(".num")&& digitCount<=7 ){
   display.textContent+= e.target.textContent;
   digitCount++;
  }
  else if(e.target.matches(".clear")){
     digit1=0;
     digit2=0;
     temp=0; 
     dotCount=0;
     digitCount=0;
     display.textContent="";
  }
  else if(e.target.matches(".once")){
  if(dotCount==0&&digitCount>0){
    display.textContent+=e.target.textContent;
    dotCount++;
  }
  }
});


