var btnchangeMoney = document.getElementById("btn1");
btnchangeMoney.addEventListener("click", getChangeMoney);
function getChangeMoney() {
  inputChangeMoney = document.getElementById("amount").value;
  let changeMoney = parseFloat(inputChangeMoney);
  let changeFrom = document.getElementById("selectFrom").value;
  let changeTo = document.getElementById("selectTo").value;
  let Result;

  if (changeFrom == "VietNam" && changeTo == "USD") {
    Result = "Result: " + changeMoney / 23000 + " $";
  } else if (changeFrom == "USD" && changeTo == "VietNam") {
    Result = "Result: " + changeMoney * 23000 + " Đ";
  } else if (changeFrom == "VietNam") {
    Result = "Result: " + changeMoney + " Đ";
  } else {
    Result = "Result: " + changeMoney + " $";
  }

  document.getElementById("result").innerHTML = Result;
}
