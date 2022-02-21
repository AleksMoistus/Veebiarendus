let orange = 
{
    name: "orange",
    shape: "round",
    color: "orange",
    sort: "fruit"
}

let banana = 
{
    name: "banana",
    shape: "oblong",
    color: "yellow",
    sort: "fruit"
}

let carrot = 
{
    name: "carrot",
    shape: "oblong",
    color: "orange",
    sort: "vegetable"
}

let food = [orange, carrot, banana]

let outputElement = document.getElementById("output")
for (let i = 0; i < food.length; i++)
{
    outputElement.innerHTML += "<div>" + food[i].name + "</div>"
}