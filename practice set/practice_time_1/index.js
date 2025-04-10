let name = "Linda"
let greeting = "Hi there"

function greet() {
    console.log(greeting + " " + name)
}

greet()

// ==============================================================

let myPoints = 3
function add3Points(){
    myPoints = myPoints + 3
}

function remove1Point(){
    myPoints = myPoints - 1
}
for (let i = 0; i<3; i++){
    add3Points()
}
for (let i = 0; i<2; i++){
    remove1Point()
}
console.log(myPoints)