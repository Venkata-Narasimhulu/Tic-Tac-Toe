let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newGame=document.querySelector(".newGame");
let winner=document.querySelector(".winner");
let after=document.querySelector(".after-game");


let turnO=true;
let patterns=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO==true){
            box.innerText="O";
            turnO=false;
            box.style.color="#9c4427";
        }
        else{
            box.innerText="X";
            turnO=true;
            box.style.color="green";
        }
        box.disabled=true;
        checkWinner();
    })
    
    
});

const checkWinner =()=>{
    for(let pattern of patterns){
        
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                // alert(pos1val+" is the Winner");
                showWinner(pos1val);

                
            }
        }
    }
}

const showWinner=(value)=>{
    winner.innerText=`Game Over \n ${value} Won`;
    after.classList.remove("hide"); 
    disableBox();
}
const disableBox=()=>{
    boxes.forEach((box) => {
        box.disabled=true;
    });
}


const enableBox=()=>{
    boxes.forEach((box) => {
        box.disabled=false;
        box.innerText="";
        after.classList.add("hide");
    });
}

const resetGame=()=>{
    enableBox();
    
}
resetBtn.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);