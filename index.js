

const val = document.getElementById("screen");


function updateDisplay(input){
    val.value += input;
}

function clearDisplay(){
    val.value = "";
}
function deletePrevious(){
    val.value = val.value.slice(0,-1);
}

function calculate(){
    try{
        val.value = eval(val.value);
    }catch(error){
        val.value = "error"
    } 
}

function modular2(){
    val.value = eval(val.value) % 2;
}

function percentage(){
    val.value = val.value / 100;
}

function toRad(){
    val.value = (val.value * (Math.PI / 180)).toFixed(2) + 'π/180' ;
}


