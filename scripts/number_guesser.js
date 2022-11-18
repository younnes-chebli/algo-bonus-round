const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
const statusText = document.getElementById("status-text");
const guessForm = document.getElementById("guess-form");

const checkNumber = (numberInput) => {
    if(numberInput == randomNumber) {
        statusText.innerHTML = "You Guessed The Number!";
        statusText.classList.add("success");
    } else {
        statusText.innerHTML = "Try Again!";
        statusText.classList.add("failure");
    }    
};

const resetStatusText = () => {
    statusText.innerHTML = "";
    statusText.removeAttribute("class");
};

guessForm.addEventListener("submit", (e) => {
    e.preventDefault();
    resetStatusText();
    const formData = new FormData(e.target);
    const numberInput = formData.get("number-input");
    checkNumber(numberInput);
});