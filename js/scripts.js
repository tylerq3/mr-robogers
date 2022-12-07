function input(num) {
  let inputArr = [];
  for (let i= 0; i <= num; i++) {
    if(i.toString().includes('3')) { 
      inputArr.push(" Won't you be my neighbor? ");
    } else if (i.toString().includes("2")) {
      inputArr.push(" boop ");
    } else if (i.toString().includes("1")) {
      inputArr.push(" beep ");
    } else {
      inputArr.push(i);
    }
    }
    return inputArr;
  }

function hideResults () {
  const hide = document.getElementById("story")
  hide.classList.add('hidden');
  document.getElementById("robo-form").removeAttribute("class", "hidden");
  document.getElementById("reset").setAttribute("class", "hidden");
}

function handleForm(event) {
  event.preventDefault();
  let userInput = document.querySelector("input#inputNum").value;
  let results = document.getElementById("results")
  results.innerText = input(userInput)
  document.getElementById("story").removeAttribute("class" , "hidden");
  document.getElementById("reset").removeAttribute("class" , "hidden");
  document.getElementById("robo-form").setAttribute("class" , "hidden");
}

window.addEventListener("load", function() {
  const form = document.getElementById("robo-form");
  form.addEventListener("submit", handleForm);
  const reset = document.getElementById("reset")
  reset.addEventListener("click", hideResults);
});