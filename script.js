var heartCountEl = document.getElementById("heart-count");
var heartCount = parseInt(heartCountEl.innerText) || 0;
var hearts = document.getElementsByClassName("favorite-btn");

for (var i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", function () {
        heartCount++;
        heartCountEl.innerText = heartCount;
    });
}


// calling sect?

let coinDisplay = document.getElementById("coin-count");
let coins = parseInt(coinDisplay.textContent);

let callButtons = document.getElementsByClassName("call-btn");
let historyList = document.getElementById("history-list");
let clearBtn = document.getElementById("clear-history");

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    if (coins < 20) {
      alert("Not enough coins!");
      return;
    }

    coins = coins - 20;
    coinDisplay.textContent = coins;

    let card = this.closest(".card");
    let serviceName = card.querySelector("h3").textContent;
    let serviceNumber = card.querySelector(".text-2xl").textContent;

    alert("Calling " + serviceName + " at " + serviceNumber);

    let entry = document.createElement("li");
    entry.textContent = serviceName + " - " + serviceNumber;
    historyList.appendChild(entry);
  });
}

clearBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});



let copyCountEl = document.getElementById("copy-count");
let copyCount = parseInt(copyCountEl.innerText) || 0;


let copyButtons = document.getElementsByClassName("copy-btn");

for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function () {
       
        copyCount++;
        copyCountEl.innerText = copyCount;

       
        alert("Number copied successfully!");
    });
}


