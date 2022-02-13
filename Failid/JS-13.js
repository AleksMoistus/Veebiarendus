let username = ''
while(username == '')
{
    username = prompt("Enter your name: ")
}

let hello = "Hello <strong>" + username + "</strong>. "
let helloElement = document.getElementById("hello")
let nameShort = "You have a short name. "
let nameLong = "You have a long name. "

if (username == "Aleks") 
{
    hello = "Hello <strong>Boss</strong>. "
}

if(username.length < [8])
{
    hello = hello + nameShort
}
else
{
    hello = hello + nameLong
}

hello = hello + "<h2>Letters in your name:</h2>"

for (let index = 0; index < username.length; index++)
{
    hello = hello + "<div>Letter nr " + index + ": " + username[index] + "</div>"
}

helloElement.innerHTML = hello
console.log(hello)

