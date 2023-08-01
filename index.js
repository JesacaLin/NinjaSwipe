let myLeads = [];

const inputBTN = document.querySelector("#input-btn");
const deleteBTN = document.querySelector("#delete-btn");
const tabBTN = document.querySelector("#save-tab-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBTN.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  ulEl.innerHTML = "";
  for (let i = 0; i < leads.length; i++) {
    const listItem = document.createElement("li");
    const anchorTag = document.createElement("a");

    //ADD DELETE BUTTON
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.classList.add("delete-button"); // Add the "delete-button" class

    deleteButton.addEventListener("click", () => {
      deleteLead(i);
    });
    listItem.appendChild(deleteButton);

    anchorTag.textContent += leads[i];
    anchorTag.href = leads[i];
    anchorTag.setAttribute("target", "_blank");
    listItem.appendChild(anchorTag);
    ulEl.appendChild(listItem);
  }
}

function deleteLead(index) {
  myLeads.splice(index, 1);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
}

inputBTN.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

deleteBTN.addEventListener("click", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
