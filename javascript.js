        let computerSelection = getComputerChoice();
        let playerWins = 0;
        let computerWins = 0;


        function getComputerChoice()
        {
            const words = ['rock','paper','scissors'];
            let randomWord = words[Math.floor(Math.random()*3)];
            return randomWord;
        }


        function playRound(playerSelection,computerSelection)
        {
            if(playerSelection == computerSelection)
            {
                return "It is a tie !!";
            }
            else if(playerSelection=="rock" && computerSelection=="paper")
            {
                computerWins+=1;
                return "You lose !! Paper winds rock !!";
            }
            else if(playerSelection =="rock" && computerSelection=="scissors")
            {
                playerWins+=1;
                return "You win!! Rock beats scissors";
            }
            else if(playerSelection =="paper" && computerSelection=="rock")
            {
                playerWins+=1;
                return "You win !! Paper beats rock !!";
            }
            else if(playerSelection=="paper" && computerSelection=="scissors")
            {
                computerWins+=1;
                return "You lose!! Scissors win paper !!";
            }
            else if(playerSelection=="scissors" && computerSelection=="rock")
            {
                computerWins+=1;
                return "You lose !! Rock beats scissors";
            }
            else if(playerSelection=="scissors" && computerSelection=="paper")
            {
                playerWins+=1;
                return "You win !! Scissors win paper !!";
            }
            else 
            {
                return "Choose rock , paper or scissors";
            }
        }

        const btnRock = document.querySelector('.btnRock');
        const btnPaper = document.querySelector('.btnPaper');
        const btnScissors = document.querySelector('.btnScissors');
        let score = document.querySelector('.score');
        let outPut = document.querySelector('.outPut');

        btnRock.addEventListener('click',function rockPress() {
            if(playerWins == 5)
            {
                outPut.textContent = "Congratulations !! You Win !!";
                btnRock.removeEventListener('click',rockPress);
            }
            else if(computerWins == 5)
            {
                outPut.textContent = "Computer Wins";
                btnRock.removeEventListener('click',rockPress);
            }
            else
            {
                computerSelection = getComputerChoice();
                outPut.textContent = playRound('rock',computerSelection);
                score.textContent = "You vs Computer : "+playerWins+" "+computerWins;
            }
        });

        btnPaper.addEventListener('click',function paperPress() {
            if(playerWins == 5)
            {
                outPut.textContent = "Congratulations !! You Win !!";
                btnPaper.removeEventListener('click',paperPress);
            }
            else if(computerWins == 5)
            {
                outPut.textContent = "Computer Wins";
                btnPaper.removeEventListener('click',paperPress);
            }
            else
            {
                computerSelection = getComputerChoice();
                outPut.textContent = playRound('paper',computerSelection)
                score.textContent = "You vs Computer : "+playerWins+" "+computerWins;
            }
        })

        btnScissors.addEventListener('click',function scissorsPress() {
            if(playerWins == 5)
            {
                outPut.textContent = "Congratulations !! You Win !!";
                btnScissors.removeEventListener('click',scissorsPress);
            }
            else if(computerWins == 5)
            {
                outPut.textContent = "Computer Wins";
                btnScissors.removeEventListener('click',scissorsPress);
            }
            else
            {
                computerSelection = getComputerChoice();
                outPut.textContent = playRound('scissors',computerSelection)
                score.textContent = "You vs Computer : "+playerWins+" "+computerWins;
            }
        })
    







