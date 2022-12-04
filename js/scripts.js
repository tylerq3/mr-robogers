function input(num) {
  let inputArr = [];
  for (let i= 0; i <= num; i++) {
    if(i.toString().includes("1")) {
      inputArr.push("beep");
    } else if (i.toString().includes("2")) {
      inputArr.push("boop");
    } else if (i.toString().includes("3")) {
      inputArr.push("Won't you be my neighbor?");
    } else {
      inputArr.push(i);
    }
    }
    return inputArr;
  }

function hideResults () {
  document.getElementById("story").setAttribute("class" , "hidden");
  document.getElementById("results").setAttribute("class" , "hidden");
  document.getElementById("robo-form").removeAttribute("class", "hidden");
  const inputNumber = document.getElementById("inputNum").value = null;
  let story = document.getElementById("story").value = null;
}
function handleForm(event) {
  event.preventDefault();
  let userInput = document.querySelector("input#inputNum").value;
  let results = document.getElementById("results")
  results.innerText = input(userInput)
  document.getElementById("story").setAttribute("class" , "hidden");
  document.getElementById("reset").setAttribute("class" , "hidden");
  document.getElementById("results").setAttribute("class" , "hidden");

}

window.addEventListener("load", function() {
  const form = document.getElementById("robo-form");
  form.addEventListener("submit", handleForm);
  const reset = document.getElementById("reset")
  reset.addEventListener("click", hideResults);
});