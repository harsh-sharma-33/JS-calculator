const buttons = document.querySelectorAll("button")
const input = document.querySelector("input")
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let operand1 = null
let operand2 = null
let operator = null

inputValue = ""

const calcEquals = () => {
  switch (operator) {
    case "+":
      input.value = Number(operand1) + Number(operand2)
      break
    case "-":
      input.value = Number(operand1) - Number(operand2)
      break
    case "*":
      input.value = Number(operand1) * Number(operand2)
      break
    case "/":
      input.value = Number(operand1) / Number(operand2)
      break
  }
}

buttons.forEach((button) => {
  button.onclick = (e) => {
    const clickedButtonValue = e.target.innerHTML
    if (clickedButtonValue in numbers) {
      console.log(clickedButtonValue)
      input.value = Number(inputValue + clickedButtonValue)
      inputValue = input.value
    } else {
      switch (clickedButtonValue) {
        case "C":
          input.value = ""
          inputValue = ""
          break
        case "+":
          operator = "+"
          operand1 = input.value
          input.value = ""
          inputValue = ""
          break

        case "-":
          operator = "-"
          operand1 = input.value
          input.value = ""
          inputValue = ""
          break

        case "*":
          operator = "*"
          operand1 = input.value
          input.value = ""
          inputValue = ""
          break

        case "/":
          operator = "/"
          operand1 = input.value
          input.value = ""
          inputValue = ""
          break
        case "=":
          operand2 = input.value
          calcEquals()
      }
    }
  }
})
