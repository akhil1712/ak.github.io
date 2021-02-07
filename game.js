
const maxScore = 10
let playerScore = 0
let computerScore = 0
const playerScore_span = document.getElementById('player-Score');
const computerScore_span = document.getElementById('computer-Score');
const scoreBoard_player_id = document.querySelector("#player");
const result_div = document.querySelector(".result");
const emoji_r_id = document.getElementById("r");
const emoji_p_id = document.getElementById("p");
const emoji_s_id = document.getElementById("s");
const replay_id = document.getElementById('replay')
const newGame_id = document.getElementById('new');
const exit_id = document.getElementById('exit');

closeWin = () => {
    window.close()};//funtion to close window

reload = () => {
    location.reload();
};

replay = () => {
    playerScore = 0;
    computerScore = 0;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `New Game Started`;
}
gameEnd = () =>{
    playerScore = 0;
    computerScore = 0;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;

    replay_id.addEventListener('click', () => {replay()} );

    newGame_id.addEventListener('click', () => {restart()} );

    exit_id.addEventListener('click', () => {closeWin()} );
}

function convert(computerChoise){
    if(computerChoise==='r') 
        return 'Rock';
    if(computerChoise==='p') 
        return 'Paper';
    else 
        return 'Scissor';
}
/* above function convert r, p and s in word*/
function win(computerChoise){
    playerScore++;
        playerScore_span.innerHTML = playerScore;
        computerScore_span.innerHTML = computerScore;
            result_div.innerHTML = `Computer choose ${convert(computerChoise)}, 1 Point goes to You 🔥🔥🔥`;
                setTimeout(() => {document.getElementById('score-Box').classList.add('green-glow');}, 50);
                // setTimeout(() => {document.getElementById('score-Box').classList.remove('green-glow');}, 500);
}
/*above function is for win, where user score goes up
used (setTimeOut) for glow in score box*/
function lose(computerChoise){
    computerScore++;
        playerScore_span.innerHTML = playerScore;
        computerScore_span.innerHTML = computerScore;
            result_div.innerHTML = `Computer choose ${convert(computerChoise)},1 Point goes to Computer 💩`;
                setTimeout(() => {document.getElementById('score-Box').classList.add('red-glow');}, 50);
                setTimeout(() => {document.getElementById('score-Box').classList.remove('red-glow');}, 500);

}
/*above function is for lose, where computer score goes up
used (setTimeOut) for glow in score box*/
function draw(computerChoise){
            result_div.innerHTML = `Computer choose ${convert(computerChoise)},Its Draw`;
                setTimeout(() => {document.getElementById('score-Box').classList.add('gray-glow');}, 50);
                setTimeout(() => {document.getElementById('score-Box').classList.remove('gray-glow');}, 500);

}
/*above funation is for draw,
used (setTimeOut) for glow in score box */
function getcomputerChoise() {
    const chosie = ['r','p','s']; 
    const randonNum = (Math.floor(Math.random()* 3));
    return chosie[randonNum];
}
/*IN ABOVE FUNCTION getcomterChoice(),
We take random Choice from Math property of JS
*/

function game(playerChoise) {
    
    const computerChoise = getcomputerChoise();

    switch (playerChoise + computerChoise) 
    {
        case 'rs':
        case 'pr':
        case 'sp':
                win(computerChoise)
            break;
        case 'sr':
        case 'rp':
        case 'ps':
                lose(computerChoise)
            break;
        case 'rr':
        case 'pp':
        case 'ss':
                draw(computerChoise)
            break;
    }
    finalResult();
}

function main()
    {
    emoji_r_id.addEventListener('click', () => {game('r')} );

    emoji_p_id.addEventListener('click', () => {game('p')} );

    emoji_s_id.addEventListener('click', () => {game('s')} );

    replay_id.addEventListener('click', ()=> {replay()} );

    newGame_id.addEventListener('click', () => {reload()} );

    exit_id.addEventListener('click', () => {closeWin()} );
}


function playerEntry(){
    const userName = prompt('ENTER your Name'+' '+'and click OK');

        if(userName === null)
        {
            let con2 = confirm('If you want to Play click ( Ok ) or click ( cancel ) to Exit')
                if(con2 == 1)
                    playerEntry()
                    else closeWin();
        }
        if(userName === '')
        {
            alert('Please, Enter Name to play')
            playerEntry()
        }
        else scoreBoard_player_id.innerHTML = userName;
            return userName;
    // maxScore = prompt('Choice')
    }
function finalResult(){
    if(playerScore > maxScore)
    {
        result_div.innerHTML = `${userName} Win The Game`;
        gameEnd();
    }
    if(computerScore > maxScore)
    {
        result_div.innerHTML = `${userName} Loose The Game`;
        gameEnd();
    }
}

function welcome(){
    let con1 = confirm('Hello, Welcome to Rock Paper Scissor Game.'+' '+'Click OK to start Game');
        if(con1 == 1){
        userName = playerEntry();
        }
        else closeWin();
        return userName;
}

userName = welcome();
main();