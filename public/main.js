const btn = document.querySelector('button')
let otherBtn = document.querySelector("#post")
const clickHandler = () => alert('The cat name is: Rascal')

btn.addEventListener('click', clickHandler)
otherBtn.addEventListener("click", function() {
    axios.post("/ma-post").then(function(response) {
        alert(response)
    })
})