let myLeads = [];

const inputBTN = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

inputBTN.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
});

function renderLeads() {
  ulEl.innerHTML = "";
  for (let i = 0; i < myLeads.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent += myLeads[i];
    ulEl.appendChild(listItem);
  }
}
