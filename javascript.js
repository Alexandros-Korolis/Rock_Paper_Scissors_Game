        let playerSelection = prompt("Choose rock ,  paper or scissors !!");
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

        function game()
        {
            for(i=0; i<5; i++)
            {
                let result = playRound(playerSelection,computerSelection);
                return result;
            }
        }





