function returnArr(num) {
  let numArr = [];
  for (i = 0; i<= num; i++){
    numArr.push(i);
  }
}

function input(num) {
  let arr = returnArr(num);
  let inputArr = arr.map(function(element) {
    if(element.toString().includes("1")) {
      return "beep";
    } else if (element.toString().includes("2")) {
      return "boop"
    } else if (element.toString().includes("3")) {
      return "Won't you be my neighbor?";
    } else {
      return element;
    }
    })
    return inputArr;
  }





function hideResults () {
  document.getElementById("story").setAttribute("class" , "hidden");
  document.getElementById("reset").setAttribute("class" , "hidden");
  document.getElementById("results").setAttribute("class" , "hidden");
}
function handleRadio(event) {
  event.preventDefault();
  const inputNum = document.getElementById("inputNum").value;
  const num1 =  numbers['1'] = 'Beep';
  const num2 = numbers['2'] = 'Boop';
  const num3 = numbers['3'] = 'Wont you be my neighbor?';
  document.getElementById("robo-form").setAttribute("class" , "hidden");
  document.getElementById("reset").removeAttribute("class", "hidden");
  document.getElementById("results").removeAttribute("class", "hidden");





window.addEventListener("load", function() {
  const form = document.getElementById("robo-form");
  form.addEventListener("submit", handleRadio);
  const reset = document.getElementById("reset")
  reset.addEventListener("click", hideResults);
})
};