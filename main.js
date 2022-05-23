document.getElementById("sub").addEventListener("click", myFunction);
document.getElementById("clear").addEventListener("click", re_move);
document.getElementById("check").addEventListener("click", myTest);
const array = ["empty", "empty"];

function myFunction() {
  if (array[0][0] == "e" && array[1][0] == "e") {
    array.pop();
    array.pop();
  }
  let val = document.getElementById("lastname").value;
  array.push(val);
  console.log(array);
}
function re_move() {
  for (let i = 1; i < 5; ) {
    array.pop();
    if (array[0] === undefined) {
      i += 5;
      array.push("empty", "empty");
      newArray();
    }
  }
  document.getElementById("return").innerHTML = "";
}
function newArray() {
  console.log(array);
}
function myTest() {
  if (array.length <= 2) {
    if (array[0][0] == array[1][0] && array[0][4] == array[1][4]) {
      let vars = array[0][1];
      let coe = array[0][0];
      coe /= 2;
      let power = array[0][4];
      power /= 2;
      if (power.length > 1) {
      }
      power = "^{" + power;
      power += "}";
      console.log(coe + vars + power);
    }
  } else {
    document.getElementById("return").innerHTML = "invaild";
  }
}
