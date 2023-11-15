var pass = "AaBbCcDdEe@FfGgHh%IiJjKk$LlMm_Nn12Oo34PpQq45RrSsTt67UuVv89WwXx0YyZz";
var regix = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
var main = document.getElementById("fun-text");
var place = document.getElementById("input");
var saveValid;


function genPassword(){
var savePass = "";
for(var i=0; i<pass.length; i++){
 var ranPass = Math.floor(Math.random()*67)

savePass += pass[ranPass];
if(savePass.length>7 && savePass.length<10){
 place.value = savePass;
 console.log(savePass);
}


}


saveValid = savePass
validPassword()
}


function validPassword(){
if(regix.test(saveValid)){
   main.innerHTML = "strong"
}else{
    main.innerHTML = "weak"
}

}
function showPassword(){
    console.log(place.type);
    if(place.type === "password"){
        place.type = "text";
    }else if(place.type === "text"){
        place.type = "password";
    }

}