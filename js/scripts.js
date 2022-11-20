function input(num) {
  let inputArr = [];
  for (let i= 0; i <= num; i++) {
    if(num.toString().includes("1")) {
      inputArr.push("beep");
    } else if (num.toString().includes("2")) {
      inputArr.push("boop");
    } else if (num.toString().includes("3")) {
      inputArr.push("Won't you be my neighbor?");
    } else {
      return (" ");
    }
    }
    return inputArr;
  }

function hideResults () {
  document.getElementById("story").setAttribute("class" , "hidden");
  document.getElementById("reset").setAttribute("class" , "hidden");
  document.getElementById("results").setAttribute("class" , "hidden");
}
function handleForm(event) {
  event.preventDefault();
  
  document.getElementById("story").setAttribute("class" , "hidden");
  document.getElementById("reset").setAttribute("class" , "hidden");
  document.getElementById("results").setAttribute("class" , "hidden");

}

window.addEventListener("load", function() {
  const form = document.getElementById("robo-form");
  form.addEventListener("click", handleForm);
  const reset = document.getElementById("reset")
  reset.addEventListener("click", hideResults);
});