import { data } from "./data.js";

function detailsElement() {
    const element1 = document.querySelector("main");
    element1.innerHTML = "";
  
    data.forEach((item) => {
      const details = document.createElement("details");
      const summary = document.createElement("summary");
      summary.textContent = item.name;
  
      details.dataset.uuid = item.uuid;
      details.appendChild(summary);
      details.innerHTML += `
          <p>Color: ${item.color}</p>
          <p>Taste: ${item.taste}</p>
          <p>Origin: ${item.origin}</p>
        `;
      element1.appendChild(details);
    });
  }
  
  function populateDatalist() {
    const list = document.querySelector("#names");
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.name;
      list.appendChild(option);
    });
  }
  
  function handleInput(ev) {
    const input = ev.target.value.toLowerCase();
    const detailsElements = document.querySelectorAll("details");
  
    detailsElements.forEach((detail) => {
      const summary = detail.querySelector("summary").textContent.toLowerCase();
      if (summary.includes(input)) {
        detail.classList.remove("close");
      } else {
        detail.classList.add("close");
      }
    });
  }
  
  function toggle(ev) {
    const toggledDetails = ev.target;
    const uuid = toggledDetails.dataset.uuid;
    const isOpen = toggledDetails.open;
  
    document.querySelectorAll("details").forEach((detail) => {
      if (detail.dataset.uuid === uuid) {
        detail.open = isOpen;
      }
    });
  }
  
  function click(ev) {
    if (ev.target.tagName !== "MAIN") return;
  
    const header = document.querySelector("header");
    const h1 = document.querySelector("h1");
    const hue = Math.floor(Math.random() * 360);
  
    header.style.backgroundColor = `hsl(${hue}, 70%, 20%)`;
    h1.style.color = `hsl(${hue}, 70%, 80%)`;
  }
  
  function addEventListeners() {
    const input = document.querySelector("#name-search");
    input.addEventListener("input", handleInput);
  
    const detailsElements = document.querySelectorAll("details");
    detailsElements.forEach((detail) => {
      detail.addEventListener("toggle", toggle);
    });
  
    const element1 = document.querySelector("main");
    element1.addEventListener("click", click);
  }
  
  function init() {
    detailsElement();
    populateDatalist();
    addEventListeners();
  }
  
  document.addEventListener("DOMContentLoaded", init);