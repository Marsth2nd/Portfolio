
function clickAlert(){
    alert("Loading Weather Report.....")
}
var cookie=document.querySelector(".btm-section")
function removeCookie(){
    cookie.remove()
}
// change values
var tempValue=document.querySelectorAll("#degree")
var tempType=document.querySelector("tempSelector").value
function changeTmpValue(tempType){
    if(tempType=="fehrenheit"){
        for(var i=0; i<tempValue.length; i++){
            tempValue[i].innerText = Math.round(tempValue[i].innerText * 1.8 + 32);
            }
        }
    else if(tempType=="celisus"){
        for(i=0; i<tempValue.length; i++){
        tempValue[i].innerText = Math.round((tempValue[i].innerText-32)*(5/9));
        }
    }
}
