let boxes = document.querySelectorAll(".box");
let rebtn = document.querySelector("#reset");
let msgcon = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let player = true;

const winpaterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,7],
    [6,7,8],
];

const resetgame = () =>{
    player = true;
    resbtn();
    msgcon.classList.add("hide");
}
// code Has Not Working.
boxes.forEach((box) => {
   box.addEventListener("click",() =>{
        console.log("button Was Clicked.");
        if(player){
            box.innerText = "O";
            player = false
        }else {
            box.innerText = "X";
            player = true
        }
        box.disabled = true;

        checkwinner();
    });
});

const disbtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const resbtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showwiner = (winner) =>{
msg.innerText = `Congratulation, Winner is ${winner}`;
msgcon.classList.remove("hide");
disbtn();
}
const checkwinner = () =>{
    for(let patern of winpaterns){
        let p1 = boxes[patern[0]].innerText;
        let p2 = boxes[patern[1]].innerText;
        let p3 = boxes[patern[2]].innerText;

    if(p1 != "" && p2 != "" && p3 != ""){
        if(p1 === p2 && p2 === p3){
            console.log("Tu Jiti Gayo",p1);
            showwiner(p1);
        }
    }
    }
}
rebtn.addEventListener("click",resetgame);