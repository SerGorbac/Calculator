document.getElementById("sum").addEventListener("click",function sum (){
const number1=Number(document.getElementById("n1").value);
const number2=Number(document.getElementById("n2").value);
alert(number1+number2);
})
document.getElementById("substraction").addEventListener("click",function substraction (){
const number1=Number(document.getElementById("n1").value);
const number2=Number(document.getElementById("n2").value);
alert(number1-number2);
})

document.getElementById("multiplication").addEventListener("click",function multiplication (){
    const number1=Number(document.getElementById("n1").value);
    const number2=Number(document.getElementById("n2").value);
    alert(number1*number2);
    })
    
document.getElementById("division").addEventListener("click",function division (){
    const number1=Number(document.getElementById("n1").value);
    const number2=Number(document.getElementById("n2").value);
    alert(number1 / number2);
    })
document.getElementById("clear").addEventListener("click",function clear(){
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
})