const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
    "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6",
     "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_",
     "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let otherbuttonEl = document.getElementById("otherbutton")
function randomCharacter() {
    index = Math.floor(Math.random()*characters.length)
    return index
}


function generateButton() {
    let password = ""
    lettercount = Math.floor( Math.random() * 17) + 12
    for ( let i = 0; i < lettercount; i++ ) {
        index = randomCharacter()
        password += characters[index]
    }
    otherbuttonEl.textContent = password
    return password
}

function copyText() {
    
    let otherbuttonEl = document.getElementById("otherbutton")

    let tempInput = document.createElement("textarea")
    tempInput.value = otherbuttonEl.textContent
    document.body.appendChild(tempInput)

    
    tempInput.select()

    
    navigator.clipboard.writeText(tempInput.value).then(() => {
        
        alert("Text copied to clipboard")
    })

    // Remove the temporary textarea element
    document.body.removeChild(tempInput)
}


