const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const output = document.querySelector(".output");

btn.addEventListener("click", function () {
  if (input.value % 2 === 1) {
    output.innerHTML = `${input.value} is an Odd number`;
} 

  else if (input.value % 2 === 0) {
    output.innerHTML = `${input.value} is an Even number`;
} 

 else {
    output.innerHTML = `${input.value} is not a number`;
    }
  input.value = ""
});