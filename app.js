let gameseq = [] ;
let userseq = [] ;

let btns = ["yellow","red","purple","green"] ;

let started = false ;
let level = 0 ;

let h2 = document.querySelector("h2") ;
// steo 1 - keypress -  gamestart
// start game
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started") ;
        started = true ;

        // calling levelup function
        levelup() ;
    }
}) ;

// step 2 - random button click then flash and level up
// flash button and level up
function gameFlash(btn){
    btn.classList.add("flash") ;
    setTimeout(function(){
        btn.classList.remove("flash") ;
    }, 250) ;
}

// userflassh
function userFlash(btn){
    btn.classList.add("userflash") ;
    setTimeout(function(){
        btn.classList.remove("userflash") ;
    }, 250) ;
}

function levelup(){
    userseq = [] ;
    level++ ;
    h2.innerText = `Level ${level}` ;

    // random button choose
    let randInx = Math.floor(Math.random() * 3) ;
    let randomcolor = btns[randInx] ;
    let randbtn = document.querySelector(`.${randomcolor}`) ;
    // console.log(randInx) ;
    // console.log(randomcolor) ;
    // console.log(randbtn) ;
    gameseq.push(randomcolor) ;
    console.log(gameseq) ;
    gameFlash(randbtn) ;
}

function checkAns(){
    // console.log(`Current Level : ${level}`) ;

    let Idx = level - 1 ;
    if(userseq[Idx] === gameseq[Idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML= `Game Over! Your Score was <b>${level}</b><br>Press any key to start game` ;
        document.querySelector("body").style.backgroundColor = "red" ;
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white" ;
        },150) ;

        // call reset function to reset the game 
        reset();
    }
}

function btnPress(){
    // console.log(this) ;
    let btn = this ;
    userFlash(btn) ;

    userColor = btn.getAttribute("id") ;
    // console.log(userColor) ;
    userseq.push(userColor) ; 

    checkAns(userseq.length-1) ;

}

let allBtns = document.querySelectorAll(".btn") ;
for(btn of allBtns){
    btn.addEventListener("click",btnPress) ;
}

function reset(){
    started = false ;
    gameseq = [] ;
    userseq = [] ;
    level = 0 ;
}