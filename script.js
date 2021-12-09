//store data in outputscreen
const outputscreen = document.getElementById("output-screen");

//displayydata in putpuut screen
function display(num){
    outputscreen.value += num;
}

//function to calculate a eval
function calc(){
    document.getElementById("output-screen").value = eval(outputscreen.value);
}

//for cancel button
function cut(){
    outputscreen.value = "";
}

