let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEL = document.getElementById("input-el")



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)
    console.log(myLeads)

})


