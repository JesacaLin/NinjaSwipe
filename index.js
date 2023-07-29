let myLeads = [];

const inputBTN = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

inputBTN.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
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

    console.log(listItem);
  }
}
