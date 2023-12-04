let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEL = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)
    renderLeads()
    inputEL.value = "";

})

 function renderLeads(){
    let listItems = ""
    for(let i = 0;i < myLeads.length; i++){
        listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>";
    }
    ulEl.innerHTML = listItems
    
 }

