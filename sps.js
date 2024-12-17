let yourScore=0,compScore=0;
let You=document.querySelector(".You");
let Comp=document.querySelector(".Comp");
const statement=document.querySelector(".statement");
const option=document.querySelectorAll(".option");
option.forEach((opt)=>{
opt.addEventListener("click" ,()=>{
let userInput=opt.getAttribute("id");
Input(userInput);
})})
const compInput=()=>{
const choices=["stone","paper","scissors"];
const idx=Math.floor(Math.random()*3);
return choices[idx];
}
const Input=(userInput)=>{
console.log("user choice =",userInput);
const comp_Input=compInput();
console.log("computer choice =",comp_Input);

if(userInput===comp_Input){
    console.log("Draw");
    statement.style.backgroundColor="#f7e3d8";
    statement.innerText="Draw";
}
else{
    let win=true;
    if(userInput==="stone"){
        if(comp_Input==="paper"){win=false;}
        else{win=true;}
    }
    else if(userInput==="paper"){
        if(comp_Input==="stone"){win=true;}
        else{win=false;}
    }
    else{
        if(comp_Input==="stone"){win=false;}
        else{win=true;}
    }
    final(win);
}
}
const final=(output)=>{
    if(output==true){
    statement.style.backgroundColor="green";
    statement.innerText="You Won";
    yourScore++;
    You.innerText=yourScore;
    }
    else{
        statement.style.backgroundColor="red";
        statement.innerText="You Lost";
        compScore++;
        Comp.innerText=compScore;
    }
}
