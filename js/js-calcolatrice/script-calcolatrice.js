// variabili
var arrayInput = [];
var buttonValue, buttonId, operation, result;
var output = document.getElementById("paragraphOutput");


// funzione che in base al bottone cliccato, inserisce nel "sectionOutput" il valore del bottone o l'operazione
document.addEventListener('click', function (e) {

    buttonId = e.target.id;
    buttonValue = document.getElementById(e.target.id).value;

    if (buttonId != undefined && buttonValue != undefined) {
        output.innerHTML += buttonValue;

        // controllo la lungezza del risultato e disattivo i bottoni
        if (output.textContent.length > 16)
            disabledButton();


        setOperation(buttonId, output);
    }
});


function setOperation(buttonId, output) {

    switch (buttonId) {

        case "buttonPercent":
            activeButton();
            arrayInput.push(output.innerHTML);
            output.innerHTML = "";
            operation = buttonId;
            break;

        case "buttonSquare":
            activeButton();
            arrayInput.push(output.innerHTML);
            output.innerHTML = "PRESS =";
            operation = buttonId;
            break;

        case "buttonSubtraction":
            activeButton();
            arrayInput.push(output.innerHTML);
            output.innerHTML = "";
            operation = buttonId;
            break;

        case "buttonDivide":
            activeButton();
            arrayInput.push(output.innerHTML);
            output.innerHTML = "";
            operation = buttonId;
            break;

        case "buttonMultiplication":
            activeButton();
            arrayInput.push(output.innerHTML);
            output.innerHTML = "";
            operation = buttonId;
            break;

        case "buttonPlus":
            activeButton();
            arrayInput.push(output.innerHTML);
            output.innerHTML = "";
            operation = buttonId;
            break;

        case "buttonEqual":
            activeButton();
            if (output.innerHTML != null) {
                arrayInput.push(output.innerHTML);
                console.log(arrayInput);
                const result = getOperation(operation, arrayInput);
                output.innerHTML = result.toString().substring(0, 16);
            }

            //Dopo ogni risultato, pulisco il jar per le operazioni nuove
            //arrayInput = [];
            break;

        case "buttonCancel":
            output.innerHTML = "";
            break;

        default:
    }

}

function getOperation(operation, arrayInput) {

    console.log("operazione" + operation);

    switch (operation) {

        case "buttonPercent":
            console.log("percentuale");
            var valueOne, valueTwo;

            //Controllo se i numeri hanno una ,
            if (Number.parseFloat(arrayInput[0]) || Number.parseFloat(arrayInput[(arrayInput.length) - 1])) {
                valueOne = parseFloat(arrayInput[0]);
                valueTwo = parseFloat(arrayInput[(arrayInput.length) - 1]);
                result = (parseFloat(valueOne) * parseFloat(valueTwo)) / 100;
            }
            else {
                valueOne = parseInt(arrayInput[0]);
                valueTwo = parseInt(arrayInput[(arrayInput.length) - 1]);
                result = (valueOne * valueTwo) / 100;
            }

            console.log(result);
            arrayInput.push(result);
            break;

        case "buttonSquare":
            console.log("potenza");
            var valueOne;

            //Controllo se i numeri hanno una ,
            if (Number.parseFloat(arrayInput[0])) {
                valueOne = parseFloat(arrayInput[0]);
                result = parseFloat(valueOne) * parseFloat(valueOne);
            }
            else {
                valueOne = parseInt(arrayInput[0]);
                result = valueOne * valueOne;
            }

            console.log(result);
            arrayInput.push(result);
            break;

        case "buttonSubtraction":
            console.log("sottrazione");
            var valueOne, valueTwo;

            //Controllo se i numeri hanno una ,
            if (Number.parseFloat(arrayInput[0]) || Number.parseFloat(arrayInput[(arrayInput.length) - 1])) {
                valueOne = parseFloat(arrayInput[0]);
                valueTwo = parseFloat(arrayInput[(arrayInput.length) - 1]);
                result = parseFloat(valueOne) - parseFloat(valueTwo);
            }
            else {
                valueOne = parseInt(arrayInput[0]);
                valueTwo = parseInt(arrayInput[(arrayInput.length) - 1]);
                result = valueOne - valueTwo;
            }

            arrayInput.push(result);
            break;

        case "buttonDivide":
            console.log("divisione");
            var valueOne, valueTwo;

            //Controllo se i numeri hanno una ,
            if (Number.parseFloat(arrayInput[0]) || Number.parseFloat(arrayInput[(arrayInput.length) - 1])) {
                valueOne = parseFloat(arrayInput[0]);
                valueTwo = parseFloat(arrayInput[(arrayInput.length) - 1]);
                result = parseFloat(valueOne) / parseFloat(valueTwo);
            }
            else {
                valueOne = parseInt(arrayInput[0]);
                valueTwo = parseInt(arrayInput[(arrayInput.length) - 1]);
                result = valueOne / valueTwo;
            }

            arrayInput.push(result);
            break;

        case "buttonMultiplication":
            console.log("moltiplicazione");
            var valueOne, valueTwo;

            //Controllo se i numeri hanno una ,
            if (Number.parseFloat(arrayInput[0]) || Number.parseFloat(arrayInput[(arrayInput.length) - 1])) {
                valueOne = parseFloat(arrayInput[0]);
                valueTwo = parseFloat(arrayInput[(arrayInput.length) - 1]);
                result = parseFloat(valueOne) * parseFloat(valueTwo);
            }
            else {
                valueOne = parseInt(arrayInput[0]);
                valueTwo = parseInt(arrayInput[(arrayInput.length) - 1]);
                result = valueOne * valueTwo;
            }

            arrayInput.push(result);
            break;

        case "buttonPlus":
            console.log("somma");
            var valueOne, valueTwo;

            //Controllo se i numeri hanno una ,
            if (Number.parseFloat(arrayInput[0]) || Number.parseFloat(arrayInput[(arrayInput.length) - 1])) {
                valueOne = parseFloat(arrayInput[0]);
                valueTwo = parseFloat(arrayInput[(arrayInput.length) - 1]);
                result = parseFloat(valueOne) + parseFloat(valueTwo);
            }
            else {
                valueOne = parseInt(arrayInput[0]);
                valueTwo = parseInt(arrayInput[(arrayInput.length) - 1]);
                result = valueOne + valueTwo;
            }

            arrayInput[0] = result;
            break;

        default:
    }

    return result;
}

// funzione per disabilitare l'input dei bottoni
function disabledButton() {
    document.getElementById("buttonZero").disabled = true;
    document.getElementById("buttonOne").disabled = true;
    document.getElementById("buttonTwo").disabled = true;
    document.getElementById("buttonThree").disabled = true;
    document.getElementById("buttonFour").disabled = true;
    document.getElementById("buttonFive").disabled = true;
    document.getElementById("buttonSix").disabled = true;
    document.getElementById("buttonSeven").disabled = true;
    document.getElementById("buttonEight").disabled = true;
    document.getElementById("buttonNine").disabled = true;
    document.getElementById("buttonDot").disabled = true;
}

function activeButton() {
    document.getElementById("buttonZero").disabled = false;
    document.getElementById("buttonOne").disabled = false;
    document.getElementById("buttonTwo").disabled = false;
    document.getElementById("buttonThree").disabled = false;
    document.getElementById("buttonFour").disabled = false;
    document.getElementById("buttonFive").disabled = false;
    document.getElementById("buttonSix").disabled = false;
    document.getElementById("buttonSeven").disabled = false;
    document.getElementById("buttonEight").disabled = false;
    document.getElementById("buttonNine").disabled = false;
    document.getElementById("buttonDot").disabled = false;
}
