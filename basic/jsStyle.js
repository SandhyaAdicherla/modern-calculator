const userInput=document.getElementById('input-number');
const addbtn=document.getElementById('btn-add');
const subbtn=document.getElementById('btn-subtract');
const mulbtn=document.getElementById('btn-multiply');
const divbtn=document.getElementById('btn-divide');

const curResultoutput=document.getElementById('cur-result');
const curResultcalc=document.getElementById('cur-calculation');

function output(result,text){
  curResultoutput.textContent=result;
  curResultcalc.textContent=text;
}
