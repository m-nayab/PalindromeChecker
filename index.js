let text=document.getElementById("txt");
let button=document.getElementById("btn");
let hidden=document.getElementById("hidden") 

function palindrome(){
let input1=text.value;
if(input1===""){
  alert("Type something")
}
else{
let input=input1.toLowerCase();
let arr=input.split("");
pali(arr);
}}
function pali(num){
  let n=num.length;
  let count=0;
for(let i=0;i<n;i++){
  if(num[i]==num[n-i-1]){
    count=count;
  }
  else{
    count=count+1;
  }
}
if(count==0){
  let para=document.createElement("p");
  para.innerText=`${text.value} is a Palindrome`;
  hidden.appendChild(para);
  text.value="";
  text.focus();
}
else{
  let para=document.createElement("p");
  para.innerText=`${text.value} is not a Palindrome`;
  hidden.appendChild(para);
  text.value="";
  text.focus();
}
}
function cheching(e){
if(e.key==="Enter"){
  palindrome();
  text.value="";
  text.focus();
}
}

button.addEventListener("click",palindrome);
text.addEventListener("keypress",cheching)