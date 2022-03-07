let tasks = []


function addTask()
{
    let inputText = document.getElementById("inputTextField").value
    let outputElement = document.getElementById("output")
    tasks.push(inputText)
    document.getElementById("inputTextField").value = ""
    console.log(tasks)
    for (let i = 0; i < tasks.length; i++)
    {
        outputElement.innerHTML = "<div>" + tasks + "</div>"
    }
    
}



