const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');
const result = document.querySelector('.result');
// jump with mouse click
const jump = document.addEventListener('click', function() {
    dino.classList.add("jump");
    setTimeout(function(){
        dino.classList.remove("jump")
    }, 500);
})

// jumpt with space key
const jump2 = document.addEventListener('keydown', function(e) {
    if(e.key === ' '){
        dino.classList.add("jump");
        setTimeout(function(){
            dino.classList.remove("jump")
        }, 500);
    }
})

const lose = setInterval(function(){
    //getComputedStyle digunakan untuk menangkap CSS dari komponen html
    //getPropertyValue digunakan untuk menangkap nilai dari CSS 
    const dinoJump = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const cactusMove = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if(cactusMove < 50 && dinoJump <= 149 && dinoJump > 130){
        cactus.style.animation = "none";
        cactus.style.left = "40px";
        alert(`You lose. Your score is ${x}. Reload the page to restart game.`);
    }
}, 10);


// score
let x = 0;
window.onload = function(){
    setInterval(function(){
        x += 1;
        result.innerHTML = x;
    }, 100)
}
