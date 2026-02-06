const display = document.querySelector(".display");
const nums = document.querySelector(".nums");
const Operator = document.querySelector(".opS"); 
const history =document.querySelector(".Calc");
let digit1=0;
let digit2=0;
let temp = "";
let dotCount=0;
let digitCount=0;
let opCount=0;
let OneOp = "";
let a = "";
function FirstOps(Num1,Ops){
  digit1 = Number(Num1);
  OneOp = Ops;
}
function SecOps(Num2){
  digit2 = Number(Num2);
  if(OneOp=="+"){
    return digit1+digit2;
  }
  else if(OneOp=="-"){
    return digit1-digit2;
  }
  else if(OneOp=="X"){
    return digit1*digit2;
  }
  else if(OneOp=="/"){
   if(digit1>0) return digit1/digit2;
   else alert("Its bad, dont try !")
  }
}



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
     opCount =0;
     OneOp = "";
     history.textContent = "";
     a = "";
     display.textContent="";
  }
  else if(e.target.matches(".once")){
  if(dotCount==0&&digitCount>0){
    display.textContent+=e.target.textContent;
    dotCount++;
  }
  }
});

Operator.addEventListener("click",(e)=>{
   if(e.target.matches(".plus")||e.target.matches(".minus")||e.target.matches(".multiply")||e.target.matches(".divide")){
     if(opCount==0){
        a = display.textContent ;
        display.textContent = "";
        digitCount = 0;
        FirstOps(a, e.target.textContent);
        opCount++;
        history.textContent = "";
        history.textContent = `${digit1} ${OneOp} `;
     }
     else if(opCount>0){
        
       a = display.textContent;
       display.textContent = "";
       digitCount = 0;
       temp = SecOps(a);
           history.textContent += ` ${digit2} `;
       display.textContent = temp;
       opCount = 0;
     }
   }
   else if(e.target.matches(".equals")){
           a = display.textContent;
       display.textContent = "";
       digitCount = 0;
       temp = SecOps(a);
      history.textContent = `${digit1} ${OneOp} ${digit2} = ${temp} `;
       display.textContent = temp;
       opCount = 0;
   }
});
