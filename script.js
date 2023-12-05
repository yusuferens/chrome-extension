let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

try {
    const leadsFromLocalStorageRaw = localStorage.getItem("myLeads");
    console.log("leadsFromLocalStorageRaw:", leadsFromLocalStorageRaw);

    const leadsFromLocalStorage = leadsFromLocalStorageRaw ? JSON.parse(leadsFromLocalStorageRaw) : [];
    console.log("leadsFromLocalStorage:", leadsFromLocalStorage);

    if (leadsFromLocalStorage) {
        myLeads = leadsFromLocalStorage;
        render(myLeads);
    }
} catch (error) {
    console.error("Error parsing JSON from local storage:", error);
}

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        try {
            if (tabs && tabs.length > 0) {
                myLeads.push(tabs[0].url);
                localStorage.setItem("myLeads", JSON.stringify(myLeads));
                render(myLeads);
            } else {
                console.error("No active tab found.");
            }
        } catch (error) {
            console.error("Error handling tabBtn click event:", error);
        }
    });
});

function render(leads) {
    try {
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
    } catch (error) {
        console.error("Error rendering leads:", error);
    }
}

deleteBtn.addEventListener("dblclick", function () {
    try {
        localStorage.clear();
        myLeads = [];
        render(myLeads);
    } catch (error) {
        console.error("Error clearing local storage:", error);
    }
});

inputBtn.addEventListener("click", function () {
    try {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    } catch (error) {
        console.error("Error handling inputBtn click event:", error);
    }
});
