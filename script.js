let input = document.querySelector("#input-box");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = operate(string);
            input.value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function floorDivide(num1, num2) {
    return num1 % num2;
}


function operate(string) {
    if (string.includes("+")) {
         let parts = string.split("+")        
        let ans = add(parseInt(parts[0]), parseInt(parts[1]));
        return ans;
    }
    if (string.includes("-")) {
        let parts = string.split("-")
        let ans = subtract(parseInt(parts[0]), parseInt(parts[1]));
        return ans;
    }
    if (string.includes("*")) {
        let parts = string.split("*")
        let ans = multiply(parseInt(parts[0]), parseInt(parts[1]));
        return ans;
    }
    if (string.includes("/")) {
        let parts = string.split("/")
        let ans = divide(parseInt(parts[0]), parseInt(parts[1]));
        return ans;
    }
    if (string.includes("%")) {
        let parts = string.split("%")
        let ans = floorDivide(parseInt(parts[0]), parseInt(parts[1]));
        return ans;
    }


}