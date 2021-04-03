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
                <a href="${this.name}.html"><h2>Puzzle: ${this.name}</h2></a>
                <input type="text" class="clue-input" id="clue-input-${this.name}" placeholder="Enter Answer Here"/>
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


// Fuck off, Tim
var clue_answers = [
    new Clue('Grillhelm', 'U0VORCBOVVRT', 'NTQ5'),
    new Clue('Carnivaww', 'MTQyNjU=', 'MTk3'),
    new Clue('Pickles', 'TVkgQVNT', 'NjY2')
]

clue_answers.forEach(i => {
    var container = document.getElementById("wrapper");
    i.appendProtoToElement(container);
});


var fuckPoo = (name) => {
    var clue = clue_answers.find(i => i.name === name);
    var val = document.getElementById(`clue-input-${name}`).value;
    if (val == window.atob(clue.correct_answer)) {
        alert(window.atob(clue.response));
    }
    else {
        alert(`${val} is incorrect`);
    }
    return false;
}