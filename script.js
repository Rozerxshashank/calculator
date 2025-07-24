const buttons=document.querySelectorAll(".button");
const input=document.getElementById("input");
const opp=['+','-','/','*','%'];
function Result(){
    try{
        const exp=input.value
        const result= new Function('return '+exp)();
        addhistory(exp,result);
        input.value=result;
        
    }   catch{
            input.value="Error";
        }
} 
function addhistory(exp,result){
    const li=document.getElementById("history-list");
    const list=document.createElement("li");
    list.textContent=`${exp}=${result}`;
    li.prepend(list);
}
function Appendvalue(value){
    const lastchar=input.value.slice(-1);
    if(input.value=="" && ['+','/','*','%'].includes(value))return;
    if(opp.includes(value)&& opp.includes(lastchar))return;
    input.value+=value;
}
buttons.forEach(button=>{
    button.addEventListener("click",function(){
       const value=button.innerHTML;
       if (value=="AC"){
        input.value="";
       }
       else if(value=="Del"){
        input.value = input.value.slice(0, -1);
       }
       else if(value=="="){
        Result();}
       else{
        Appendvalue(value);
       }
    })
    
});
document.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        input.value=eval(input.value);
    }
})

