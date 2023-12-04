let myLeads = [12,34,45]
const inputBtn = document.getElementById("input-btn")
const inputEL = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)

})

let listItems = ""

for(let i = 0;i < myLeads.length; i++){
    listItems += "<li>" + myLeads[i] + "</li> "
}

ulEl.innerHTML = listItems

