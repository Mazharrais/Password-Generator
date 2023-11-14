var pass = "AaBbCcDdEe@FfGgHh%IiJjKk$LlMm_Nn12Oo34PpQq45RrSsTt67UuVv89WwXx0YyZz";
var regix = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
var main = document.getElementById("fun-text")
var saveValid;
function genPassword(){
var savePass = "";
for(var i=0; i<pass.length; i++){
 var ranPass = Math.floor(Math.random()*67)

savePass += pass[ranPass];
if(savePass.length>7 && savePass.length<10){
 main.innerHTML = savePass;
}


}
saveValid = savePass
}


function validPassword(){
if(regix.test(saveValid)){
    console.log("True")
}else{
    console.log("false");
}

}