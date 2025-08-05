
const display = document.getElementById("display");

//displays the text the was clicked in the display or input
function printToDisplay(input) {
    display.value += input;
}

//deletes all the text in the display
function clearDisplay(){
    display.value = "";
}

//removes the last character on the display
function deleteKey(){
    display.value = display.value.slice(0, -1);
}


//calculates the text in the display
function calculate (){

    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error";
    }

}