let errorParagraph = document.getElementById("error")
cosaole.log(errorParagraph)


function purchase(){
    console.log("You purchased")
    errorParagraph.innerText = "Something went wrong"

    
    errorParagraph.style.color = "red"
    errorParagraph.style.backgroundColor = "white"
    errorParagraph.style.fontSize = "20px"
    errorParagraph.style.fontWeight = "bold"
    errorParagraph.style.textAlign = "center"
    errorParagraph.style.padding = "10px"
}