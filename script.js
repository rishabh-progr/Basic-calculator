const cal = document.getElementById("myCal");
const display = document.getElementById("myDisplay");
const keys = document.querySelectorAll(".key");

let value = "";

keys.forEach((button) => {
    button.addEventListener("click", () => {
        let text = button.innerText;
        if (text === "clr") {
            value = "";
        }
        else if (text === "=") {
            value = eval(value);
        }
        else {
            value += text;
        }
        display.innerText = value;
    })
})