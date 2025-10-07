function myFunction() {
  document.body.style.backgroundColor = "lightblue";
  document.getElementById("demo").innerHTML = "Hellooooooo";
}


function removetext() {
  document.getElementById("Copyrighttxt").style.display = "none";
}
function text() {
  document.getElementById("Copyrighttxt").style.display = "block";
}


let count = 0;
    const display = document.getElementById("count");

    function increment() {
      count++;
      display.innerText = count;
    }

    function decrement() {
      count--;
      display.innerText = count;
        }



const input = document.querySelector("input");
const log = document.getElementById("navnværdi");
const charCount = document.getElementById("optællingen"); // Tilføjet

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
  charCount.textContent = `Tegn: ${e.target.value.length}`; // Opdaterer optælling
}
const str = "Hello, world!";

console.log(`${str} ${str.length}`);
