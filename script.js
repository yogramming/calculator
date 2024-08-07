let input = document.querySelector("#input-box");
let buttons = document.querySelectorAll("button");

let string = "";
let num1 = null;
let operator = "";
let num2 = null;
let extra = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            // Ensure both numbers are set before calculating
            if (num1 !== null && num2 !== null && operator) {
                string = operate(num1, operator, num2);
                input.value = string;

                // Allow further calculations with the result
                num1 = string;
                num2 = null;
                operator = "";
            }

        }
        else if (e.target.innerHTML == "AC") {
            // Reset all the values
            string = "";
            input.value = string;
            num1 = null;
            num2 = null;
            operator = "";
        }
        else if (e.target.innerHTML == "Del") {
            // Remove the last character from the string
            string = string.substring(0, string.length-1);
            input.value = string;

            // Reset if the string becomes empty
            if (string.length === 0) {
                num1 = null;
                num2 = null;
                operator = "";
                string = "";
            }
        }
        else {
            // Check if the button's value is a number or a decimal
            if (!isNaN(e.target.innerHTML) || e.target.innerHTML === ".") {
                // If no operator has been entered, build num1
                if (operator === "") {
                    if (num1 === null) {
                        num1 = e.target.innerHTML;
                    } else {
                        if (!(num1.includes(".")) || !(e.target.innerHTML === ".")) {
                        num1 += e.target.innerHTML;
                        }
                    }
                } 

                // If operator exists, build num2
                else {
                    if (num2 === null) {
                        num2 = e.target.innerHTML;
                    } else {
                        if (!(num2.includes(".")) || !(e.target.innerHTML === ".")) {
                        num2 += e.target.innerHTML;
                        }
                    }
                } 
            }

            else {
                // Check if the operator is already set to prevent re-entry
                if (operator === "") {
                    operator = e.target.innerHTML;
                }
                else if (num2 !== null) {
                    num1 = operate(num1, operator, num2);
                    operator = e.target.innerHTML;
                    num2 = null;
                }
            }

            // Append the clicked button value to the display screen
            string += e.target.innerHTML;
            input.value = string;
            
        }
    })
})


function operate(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    num1 = Math.round(num1 * 100) / 100;
    num2 = Math.round(num2 * 100) / 100;
    if (operator === "+") {
        return num1 + num2;
    }
    if (operator === "-") {
        return num1 - num2;
    }
    if (operator === "*") {
        return num1 * num2;
    }
    if (operator === "/") {
        if (num2 === 0) return "No division by Zero!"
        return num1 / num2;
    }
    if (operator === "%") {
        return num1 % num2;
    }
    return null;
}