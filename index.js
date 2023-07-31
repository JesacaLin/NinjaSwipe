let myLeads = [];

const inputBTN = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

//console.log(leadsFromLocalStorage);

inputBTN.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  renderLeads();

  //console.log(localStorage.getItem("myLeads"));
});

function renderLeads() {
  ulEl.innerHTML = "";
  for (let i = 0; i < myLeads.length; i++) {
    const listItem = document.createElement("li");
    const anchorTag = document.createElement("a");
    anchorTag.textContent += myLeads[i];
    anchorTag.href = myLeads[i];
    anchorTag.setAttribute("target", "_blank");

    listItem.appendChild(anchorTag);
    ulEl.appendChild(listItem);

    //set localstorage here
    // localStorage.setItem("MyLeads", JSON.stringify(myLeads[i]));

    console.log(myLeads[i]);
  }
}
