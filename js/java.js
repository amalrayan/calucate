

let output=document.querySelector("#input");
let values=document.querySelector("#display");
let eqauals=document.getElementById("equal");
values.value;
console.log(values)

// let 
let display=(num)=>{
 output.value+=num;
 
}

// console.log(values)


let calculate=()=>{

    let operation="";
//   let numbers=  output.value;
  if(output.value.includes("+")){
    operation="+";
  }
  else if(output.value.includes("-")){
    operation="-";
  }

  else if(output.value.includes("*")){
    operation="*";
  }
  else if(output.value.includes("/")){
    operation="/";
  }
//   console.log(operation);
const number=output.value.split(operation);
console.log(number);
switch(operation){
    case '+': output.value=`${+number[0] + +number[1]}`;
    break;
    case '-': output.value=`${+number[0] - +number[1]}`;
    break;
    case '*': output.value=`${+number[0] * +number[1]}`;
    break;
    case '/': output.value=`${+number[0] / +number[1]}`;
    break;
}

// console.log(number);

    // values.value;
    // console.log(values);
}

let dollars=(dol)=>{
  dol=output.value*3.41;
  console.log(dol);
  output.value=dol;
//   let dollar=dol*3.71;
// values.value+=dollar;
// console.log(values)
  
}
let dollarsToSheskals=(dol)=>{
  dol=output.value*0.29;
  console.log(dol);
  output.value=dol;
//   let dollar=dol*3.71;
// values.value+=dollar;
// console.log(values)
  
}
let euro=(eur)=>{
  eur=output.value*3.58;
  console.log(eur);
  output.value=eur;
}

let euroToskekals=(eur)=>{
  eur=output.value*0.28;
  console.log(eur);
  output.value=eur;
}


let clears=()=>{
output.value="";
}
let deletes=()=>{
output.value=output.value.slice(0,-1);
}


