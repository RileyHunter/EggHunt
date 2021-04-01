var body = document.body;
var orientation = Math.floor(Math.random() * 360) + 1 + 'deg'
var midStop = Math.floor(Math.random() * 50) + 26 + '%'
var colourA = 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',1) 0%';
var colourB = 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',1) ' + midStop;
var colourC = 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',1) 100%';
var gradientString = 'linear-gradient(' + orientation + ', ' + colourA + ', ' + colourB + ', ' + colourC + ')'
body.style.backgroundImage = gradientString;


class Clue {
    constructor(name, correct_answer, response) {
        this.name = name;
        this.correct_answer = correct_answer;
        this.response = response;
    }

    makeClueProto() {
        return `
        <div class="clue-wrapper" id="clue-wrapper-${this.name}">
            <form>
                <h2>Clue ${this.name}</h2>
                <input type="text" class="clue-input" id="clue-input-${this.name}" placeholder="Enter Answer ${this.name} Here"/>
                <input type="submit" onClick="fuckPoo('${this.name}'); return false;"
                />
            </form>
        </div>
        `
    }

    appendProtoToElement(containingDiv) {
        containingDiv.innerHTML += this.makeClueProto();
    }
}

var clue_answers = [
    new Clue('A', 'poos', '1234'),
    new Clue('B', 'poos', '1235'),
    new Clue('C', 'poos', '4321')
]

clue_answers.forEach(i => {
    var container = document.getElementById("wrapper");
    i.appendProtoToElement(container);
});


var fuckPoo = (name) => {
    var clue = clue_answers.find(i => i.name === name);
    var val = document.getElementById(`clue-input-${name}`).value;
    if (val == clue.correct_answer) {
        alert(clue.response);
    }
    else {
        alert(`NOT ${val}, FUCK YOU`);
    }
    return false;
}