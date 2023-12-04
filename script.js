let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEL = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const saveTabBtn = document.getElementById("savetab-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))

if(leadsFromLocalStorage ) {
    myLeads = leadsFromLocalStorage;
    render(myLeads)

    
}


saveTabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads.value) )
        render(myLeads)
    })
    
})


function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'> 
                    ${leads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}


deleteBtn.addEventListener("dblclick",function(){
   localStorage.clear()
   myLeads = []
   render(myLeads)
   
})


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
    inputEL.value = "";
    render(myLeads)


})


