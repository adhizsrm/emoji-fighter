let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let randomVar1 = Math.floor(Math.random()*fighters.length)
    let randomVar2 = Math.floor(Math.random()*fighters.length)
    stageEl.textContent = fighters[randomVar1] + "Vs" + fighters[randomVar2]
})
