var abc;
var buiverfuyyu = document.getElementById("jumpbtn");
function gamestarted() {
buiverfuyyu.addEventListener("click", (e)=> {
    jump();
})
var dino = document.getElementById("dino");
var cactus = document.getElementById("cactus");
setInterval(cactus.classList.add("blablabla"), 1000);
function jump() {
    if(dino.classList != "jumpclass") {
    dino.classList.add("jumpclass");
    setTimeout(function(){
        dino.classList.remove("jumpclass");
    },350)
}
}

var isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
    document.getElementById("gameovertext").innerHTML="Game Over.";
    }
}, 10)

document.addEventListener("keydown", (e)=> {
    jump()
})
}
