// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")



let countEl = document.getElementById("count-el")

// create a variable that stores the count element in the HTML
// intialize the count as 0
let count = 0
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
function increment() {
    count = count + 1
    console.log(count)
    countEl.innerText = count
   
}


function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    // 4. Reset the count to 0 after saving
    countEl.innerText = 0
    count = 0
    // 5. Also reset the count to 0 after saving
    
}