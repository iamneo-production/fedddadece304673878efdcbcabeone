let cells = ['','','','','','','','',''];
let currentPlayer = 'X';
let result =document.querySelector('.result');
let btns = document.querySelectorAll('btn');
const winConditions =[
    [0,1,2],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
function checkWin(){
    for(let condition of winConditions)
    {
        const[a,b,c] = condition;
        if(cells[a]&&cells[a] ===cells[b]&&cells[b]===cells[c]){
            return cells[a];
        }
    }
    if(!cells.includes('')){
        return'draw';
    }
    return null;
}
function handleMove(element,index)
{
    if(cells[index]||checkWin()){
        return;
    }
        cells[index] =currentPlayer;
        element.value= currentPlayer;
        element.disabled=true;
        currentPlayer=currentPlayer==='X'?'O':'X';
        const winner= checkWin()
}