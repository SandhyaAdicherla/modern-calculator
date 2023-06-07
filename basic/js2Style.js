const defaultResult=0;
let currentRes=defaultResult;

function getuserInput(){
  return parseInt(userInput.value);
}
// output(currentRes,description);
function getwrite(operator,cur,input){
   const calculation=`${cur}${operator}${input}`;
   output(currentRes,calculation);
}
function calculate(operatortype){
  const enternum=getuserInput();
  if(operatortype!=='ADD' &&
     operatortype!=='SUB' &&
     operatortype!=='MUL' &&
     operatortype!=='DIV' ||
     !enternum
  ){
    return;
  }
  const initital=currentRes;
  
  if(operatortype==='ADD'){
    currentRes+=enternum;
    getwrite('+',initital,enternum,currentRes);
  }else if(operatortype==='SUB'){
    currentRes-=enternum;
    getwrite('-',initital,enternum,currentRes);
  }else if(operatortype==='MUL' ){
    currentRes*=enternum;
    getwrite('*',initital,enternum,currentRes);
  }else if(operatortype==='DIV'){
    currentRes/=enternum;
    getwrite('/',initital,enternum,currentRes);
  }
  
}
function add(){
  calculate('ADD');
  
}
function subtract(){
  calculate('SUB');
}
function multiply(){
  calculate('MUL');
}
function divide(){
  calculate('DIV');
}

addbtn.addEventListener('click',add);
subbtn.addEventListener('click',subtract);
mulbtn.addEventListener('click',multiply);
divbtn.addEventListener('click',divide);