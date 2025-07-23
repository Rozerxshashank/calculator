const buttons=document.querySelectorAll(".button");
const input=document.getElementById("input");
const operators=document.querySelectorAll(".operator");
buttons.forEach(button=>{
    button.addEventListener("click",function(e){
       if (button.innerHTML=="AC"){
        input.value="";
       }
       else if(button.innerHTML=="Del"){
        input.value = input.value.slice(0, -1);
       }
       else if(button.innerHTML=="="){
        input.value=eval(input.value);
       }
       else{
        input.value+=button.innerHTML;
       }
    })
    
});
document.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        input.value=eval(input.value);
    }
})

