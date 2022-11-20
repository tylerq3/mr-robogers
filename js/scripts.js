function input(num) {
  let inputNum= parseInt(num);
  let outputNum = inputNum + 1;
  let inputArr = [];
  for (let i= 0; outputNum + 1; i++) {
    if(num.toString().includes("1")) {
      return inputArr.push("beep");
    } else if (num.toString().includes("2")) {
      return inputArr.push("boop");
    } else if (num.toString().includes("3")) {
      return inputArr.push("Won't you be my neighbor?");
    } else {
      return num;
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
  document.getElementById("robo-form").setAttribute("class" , "hidden");
  document.getElementById("story").removeAttribute("class" , "hidden");
  document.getElementById("reset").removeAttribute("class" , "hidden");
  document.getElementById("results").removeAttribute("class" , "hidden");


   
  }

  




  window.addEventListener("load", function() {
    const form = document.getElementById("robo-form");
    form.addEventListener("submit", handleForm);
    const reset = document.getElementById("reset")
    reset.addEventListener("click", hideResults);
  })  
};