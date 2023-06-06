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
  const initital=currentRes;
  const enternum=getuserInput();
  if(operatortype==='ADD'){
    currentRes+=enternum;
    getwrite('+',initital,enternum,currentRes);
  }else{
    currentRes-=enternum;
    getwrite('-',initital,enternum,currentRes);
  }
  
}
function add(){
  // const enternum=getuserInput();
  // const initital =currentRes;
  // currentRes=currentRes+enternum;
  calculate('ADD');
  
}
function subtract(){
  // const enternum=getuserInput();
  // const initital =currentRes;
  // currentRes=currentRes-enternum;
  // getwrite('-',initital,enternum,currentRes);
  calculate('SUB');
}
function multiply(){
  const enternum=getuserInput();
  const initital =currentRes;
  currentRes=currentRes*enternum;
  getwrite('*',initital,enternum,currentRes);
}
function divide(){
  const enternum=getuserInput();
  const initital =currentRes;
  currentRes=currentRes/enternum;
  getwrite('/',initital,enternum,currentRes);
}

addbtn.addEventListener('click',add);
subbtn.addEventListener('click',subtract);
mulbtn.addEventListener('click',multiply);
divbtn.addEventListener('click',divide);