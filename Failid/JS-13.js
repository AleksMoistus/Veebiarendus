let username = ''
while(username == '')
{
    username = prompt("Enter your name:")
}

let hello = "Tere <strong>" + username + "</strong>"
let helloElement = document.getElementById("hello")

if (username == "Aleks") 
{
    hello = "Tere <strong>Boss</strong>"
}

hello = hello + "<h2>Letters in your name</h2>"

for (let index = 0; index < username.length; index++)
{
    hello = hello + "<div>Letter nr " + index + ": " + username[index] + "</div>"
}

helloElement.innerHTML = hello
console.log(hello)

