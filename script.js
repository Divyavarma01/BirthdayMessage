// Arrays from your board idea
const niceMessages = [
    "You are great!",
    "Wishing you a fantastic birthday!",
    "May your day be filled with happiness",
    "You deserve all the joy today!",
    "Keep shining and smiling"
];

const teaseMessages = [
    "Your friend is great… you? still improving ",
    "Another year older, not wiser ",
    "Cake is ready… where are you? ",
    "Don't count candles, just enjoy!",
    "Age is just a number… a BIG one."
];

// Function
function generateMessage() {
    const birthday = document.getElementById("birthday").value;
    const type = document.getElementById("type").value;
    const resultDiv = document.getElementById("result");

    if (!birthday) {
        alert("Please enter your birthday!");
        return;
    }

    let messages = (type === "nice") ? niceMessages : teaseMessages;

    // Random message
    let randomIndex = Math.floor(Math.random() * messages.length);
    let message = messages[randomIndex];

    resultDiv.classList.remove("d-none");
    resultDiv.innerHTML = "🎁 " + message;
}