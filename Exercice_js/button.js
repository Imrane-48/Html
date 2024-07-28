const button = document.getElementById("Buttn")
button.addEventListener("click", function() {
    let h1 = document.createElement("h1")
    h1.textContent = "Hello world"
    document.body.appendChild (h1)
})
