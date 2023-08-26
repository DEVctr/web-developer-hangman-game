let losePoints = 6;

let secretWordCategory;
let secretWordSort;

let dinamicList = [];

const words = [
    word001 = {
        name : "IRELAND",
        category : "💡 PLACES"
    },

    word002 = {
        name : "EL-SALVADOR",
        category : "💡 PLACES"
    },

    word003 = {
        name : "ROME",
        category : "💡 PLACES"
    },

    word004 = {
        name : "CAT",
        category : "💡 ANIMALS"
    },

    word005 = {
        name : "BEE",
        category : "💡 ANIMALS"
    },

    word006 = {
        name : "DUCK",
        category : "💡 ANIMALS"
    },

    word007 = {
        name : "PENCIL",
        category : "💡 OBJECTS"
    },

    word008 = {
        name : "LIGHT-BULB",
        category : "💡 OBJECTS"
    },

    word009 = {
        name : "PHONE",
        category : "💡 OBJECTS"
    },

    word010 = {
        name : "BANANA",
        category : "💡 FRUITS"
    },

    word011 = {
        name : "APPLE",
        category : "💡 FRUITS"
    },
    word012 = {
        name : "LEMON",
        category : "💡 FRUITS"
    },
    
];

createSecretWord()
function createSecretWord() {
    const indexWord = parseInt(Math.random() * words.length)

    secretWordSort = words[indexWord].name;
    secretWordCategory = words[indexWord].category
}

showWord()
function showWord() {
    const category = document.getElementById("category")
    category.innerHTML = secretWordCategory;

    const wordScreen = document.getElementById("secret-word")
    wordScreen.innerHTML = "";


    for (let index = 0; index < secretWordSort.length; index++) {
        if (dinamicList[index] == undefined) {
            dinamicList[index] = "&nbsp;"

            wordScreen.innerHTML += `<div class="letters">${dinamicList[index]}</div>`
        }
        else {
            wordScreen.innerHTML += `<div class="letters">${dinamicList[index]}</div>`
        }

        const element = secretWordSort[index];
        
    }
}

function checkChosenLetter(letter) {
    document.getElementById(`key-${letter}`).disabled = true;

    if (losePoints > 0) {
        changeFontStyle(`key-${letter}`)
        compareLists(letter);
        showWord();
    }
    
}

function changeFontStyle(key) {
    document.getElementById(key).style.background = "#8b8b";
    document.getElementById(key).style.color = "#fff";
}

function compareLists(letter) {
    const pos = secretWordSort.indexOf(letter)

    if (pos < 0) {
        losePoints--
        loadImage();

        if (losePoints == 0) {
            openModal("Ops!", `The secret word was ${secretWordSort}`);
        }
    }

    else {
        for (let index = 0; index < secretWordSort.length; index++) {
            if (secretWordSort[index] == letter) {
                dinamicList[index] = letter;
            }
            
        }
    }

    let winner = true;
    for (let index = 0; index < secretWordSort.length; index++) {
        if (secretWordSort[index] != dinamicList[index]) {
            winner = false;
        }
    }

    if (winner == true) {
        openModal("Congratulations", "You win!")
        losePoints = 0;
    }
}

function loadImage() {
    switch (losePoints) {
        case 5:
            document.getElementById('image').style.background = "url('./assets/image/forca01.png')";
            break;
        case 4:
            document.getElementById('image').style.background = "url('./assets/image/forca02.png')";
            break;
        case 3:
            document.getElementById('image').style.background = "url('./assets/image/forca03.png')";
            break;
        case 2:
            document.getElementById('image').style.background = "url('./assets/image/forca04.png')";
            break;
        case 1:
            document.getElementById('image').style.background = "url('./assets/image/forca05.png')";
            break;
        case 0:
            document.getElementById('image').style.background = "url('./assets/image/forca06.png')";
            break;
        default:
            document.getElementById('image').style.background = "url('./assets/image/forca.png')";
            break;
    }
}

function openModal(title, mensage) {
    let modalTitle = document.getElementById("exampleModalLabel")
    modalTitle.innerText = title;

    let modalBody = document.getElementById("modal-body")
    modalBody.innerHTML = mensage;

    $("#myModal").modal({
        show: true
    });
}

let btnRestart = document.querySelector("#btnRestart")
btnRestart.addEventListener("click", function() {
    location.reload();
})