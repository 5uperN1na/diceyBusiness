//create global array
let objArray = [];

//Function to generate random number.
function random(){
    return Math.floor(Math.random() * 6) + 1;
}

let Dice = function(){
    this.value = this.roll();
    this.div = document.createElement('div');
    this.div.innerText = this.value;
    this.div.className = 'die';
    document.getElementById('container').appendChild(this.div);
    this.div.addEventListener('click', function(){
        this.value = this.roll();
        this.div.innerText = this.value;
    }.bind(this));
    this.div.addEventListener('dblclick', function(){
        this.div.remove();
         let id = objArray.indexOf(this);
        objArray.splice(id,1);
    }.bind(this))
}

//Associate random number function when die is rolled.
Dice.prototype.roll = function() {
    return random();
}

//Get generate button from html and add an event listener to it.
//Create a function to get value rolled and push value onto global array already declared.
document.getElementById('generate').addEventListener('click', function(){
    let value = new Dice();
    objArray.push(value);
})

//Get roll button from html and add an event listener to it.
//Create a function with a for loop to
document.getElementById('roll').addEventListener('click', function(){





        for(let i = 0; i < objArray.length; i++){
            objArray[i].value = objArray[i].roll();
            objArray[i].div.innerText = objArray[i].value;
        }
})

document.getElementById('sum').addEventListener('click', function(){
    let total = 0;
    for (let i = 0; i < objArray.length; i++){
        total += objArray[i].value;
    }
    alert('The sum is' + total);
})