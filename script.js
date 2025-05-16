
// playing memes

document.querySelectorAll(".meme").forEach((e) => {
    e.addEventListener("mousedown", (event) => {
        event.preventDefault();
        if (e.id == "dog-smile-meme") {
            e.src = "images/dog-smile.gif";
        }
        else if (e.id == "sad-meme") {
            e.src = "images/sad.gif";
        }
    })
    document.addEventListener("mouseup", () => {
        if (e.id == "dog-smile-meme") {
            e.src = "images/dog-smile.png";
            
        }
        else if (e.id == "sad-meme") {
            e.src = "images/sad.png";
        }
    })

})