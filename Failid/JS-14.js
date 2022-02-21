let colors = ["pink", "red", "blue", "Pink", "Red", "Blue"]

function teeMidagi(inputText)
{
    let outputElement = document.getElementById("output")
    outputElement.innerHTML = "<div>" + inputText + "</div>"
    console.log(inputText)
}

function guessColor()
{
    let inputText = document.getElementById("inputTextField").value
    if(colors.includes.inputText)
    {
        teeMidagi("Congratulations you have guessed the color! It is " + inputText + "!")
    }
    else
    {
        teeMidagi("Color " + inputText + " is wrong!")
    }
}

