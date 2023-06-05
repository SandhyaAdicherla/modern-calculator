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
function add(){
  const enternum=getuserInput();
  const initital =currentRes;
  currentRes=currentRes+enternum;
  getwrite('+',initital,enternum,currentRes);
}
function subtract(){
  const enternum=getuserInput();
  const initital =currentRes;
  currentRes=currentRes-enternum;
  getwrite('-',initital,enternum,currentRes);
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