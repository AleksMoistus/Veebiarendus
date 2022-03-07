let orange =
{
    title: "Orange",
    shape: "Round",
    color: "Orange",
    sort: "Fruit",
    rating: 9,
    picture: "../Pildid/orange.png",
    description: "Test",
}

let banana =
{
    title: "Banana",
    shape: "Oblong",
    color: "Yellow",
    sort: "Fruit",
    rating: 8,
    picture: "../Pildid/banana.png",
    description: "Test",
}

let carrot =
{
    title: "Carrot",
    shape: "Oblong",
    color: "Orange",
    sort: "Vegetable",
    rating: 7,
    picture: "../Pildid/Carrot.jpg",
    description: "Test",
}

let strawberry =
{
    title: "Strawberry",
    shape: "Round with tip",
    color: "Red",
    sort: "Fruit",
    rating: 9,
    picture: "../Pildid/Banana.png",
    description: "Test",
}

let food = [orange, carrot, banana, strawberry]

function createFruitHTML(fruit) {
    return `
    <div class="col-3 card">
        <img class="card-img-top" src="${fruit.picture}"
        <div class="card-body">
            <div class="card-title">${fruit.title}</div>
            <div class="card-text">
                <p>
                    Sort: ${fruit.sort}, Rating: ${fruit.rating}
                </p>
                <div>${fruit.description}</div>
            </div>
        </div>
    </div>
    `
}

function addFruit() {
    let inputTitle = document.getElementById("inputTitle").value
    let inputSort = document.getElementById("inputSort").value
    let inputRating = document.getElementById("inputRating").value
    let fruit = {
        title: inputTitle,
        shape: "Unknown",
        color: "Unknown",
        sort: inputSort,
        rating: inputRating,
        picture: "../Pildid/Banana.png",
        description: "User written description",
    }
    food.push(fruit)
    showFruits()
}

function showFruits(){
    let outputElement = document.getElementById("output")
    outputElement.innerHTML = ""
    for (let i = 0; i < food.length; i++) {
        outputElement.innerHTML += createFruitHTML(food[i])
    }
}

showFruits()