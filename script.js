let myLeads = [12,34,45]
const inputBtn = document.getElementById("input-btn")
const inputEL = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)

})

for(let i = 0;i < myLeads.length; i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li> "
}

