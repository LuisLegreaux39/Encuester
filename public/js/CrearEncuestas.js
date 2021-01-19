
var inputsQuestionBox = document.getElementById('questionBox');
var inputCentinel = 0;


function handleSelectValue() {
    createInputs(inputCentinel);
}

function createInputs(param) {
    var questionInputs = document.createElement('div');
    questionInputs.setAttribute("id",`inputBox${param+1}`);
    questionInputs.innerHTML = "<input type='text' class='form-control-plaintext' id=`Pregunta' name='Pregunta"+(param+1)+"' placeholder='Introdusca su pregunta' style='border-color: darkgray;border-width: 1px;'> <br>";
    inputsQuestionBox.appendChild(questionInputs);
    inputCentinel = param+1;
}
function eraseLastInput() {
    var elementName = `inputBox${inputCentinel}`;
    var lastQuestionInput = document.getElementById(elementName);
    if(inputCentinel > 0){
        inputsQuestionBox.removeChild(lastQuestionInput);
        inputCentinel-=1;
    }
}