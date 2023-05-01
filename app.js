// create input area

const input = document.createElement("input")
input.type = "text"
document.body.appendChild(input)

// create virtual keyboard

const keyboard = document.createElement("div")
keyboard.className = "keyboard"
document.body.appendChild(keyboard)

const keys = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", { action: "Backspace", class: "backspace" }],
    [{ action: "Tab", class: "tab" }, "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
    [{ action: "CapsLock", class: "caps-lock" },"a","s","d","f","g","h","j","k","l",";","'",{ action: "Enter", class: "enter" },],
    [{ action: "Shift", class: "shift" },"z","x","c","v","b","n","m",",",".","/",{ action: "Shift", class: "shift" },],

    [    { action: "Ctrl", class: "ctrl" },
    { action: "Alt", class: "alt" },
    { action: "Space", class: "space" },
    { action: "Alt", class: "alt" },
    { action: "Ctrl", class: "ctrl" },],
]

keys.forEach(row => {
    const rowEl = document.createElement("div")
    rowEl.className = "row"
    row.forEach(key => {
        const keyEl = document.createElement("button")
        keyEl.className = "key"
        if (typeof key === "string") {
        keyEl.textContent = key
        keyEl.setAttribute("data-key", key.toLowerCase())
        } else {
        keyEl.textContent = key.action
        keyEl.classList.add(key.class)
        keyEl.setAttribute("data-action", key.action.toLowerCase())
        }
        rowEl.appendChild(keyEl)
    })

    keyboard.appendChild(rowEl)
})

// add event listeners to keys

const keyEls = document.querySelectorAll(".key")
keyEls.forEach(keyEl => {
    keyEl.addEventListener("click", () => {
        const key = keyEl.textContent
    if (key === "Backspace") {
        input.value = input.value.slice(0, -1)
    } else if (key === "Enter") {
        input.value += "\n"
    } else if (key === "Tab") {
        input.value += "  "
    } else if (key === "Space") {
        input.value += " "
    } else if (key === "CapsLock") {

    }
else if (key === "En/Ru") {

    }  
    else {
        input.value += key
    }
    })
})

