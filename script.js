let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEL = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

localStorage.clear() 
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))

if(leadsFromLocalStorage ) {
    myLeads = leadsFromLocalStorage;
    renderLeads()

}



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)
    renderLeads()
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))

    inputEL.value = "";

})

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'> 
                    ${myLeads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}

