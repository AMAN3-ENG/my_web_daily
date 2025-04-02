// document.getElementById("count-el").innerText = 5


let countEl = document.getElementById("count-el")

console.log(countEl)


// create a variable that stores the count element in the HTML
// intialize the count as 0
let count = 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
function increment() {
    count = count + 1
    console.log(count)
    countEl.innerText = count
   
}