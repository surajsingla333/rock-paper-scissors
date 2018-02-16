let num = 3, youWin = 0 , youLose = 0 ;

let option ;
const playerChoice = document.querySelectorAll('.choose');
playerChoice.forEach( (button) => {
	 button.addEventListener('click', () => {
		 hidden = null;
	 option = button.value ;
	 playRound(option); })
}) ;



function random(num)
{
	return Math.floor(Math.random()*num)  ;
}

function computerPlay()
{
	let sh = parseInt(random(num)) ;
	if(sh == 0) return "rock";
	else if(sh == 1) return "paper";
	else if(sh == 2) return "scissors";
}

function playRound(playerSelection , computerSelection)
{

	let res = document.querySelector('h3');
			res.textContent = null;

	let image = document.querySelector('#showEmoji');

	computerSelection = computerPlay();
	let result ;
	let head = document.querySelector('h4');
	    head.textContent = null;

   	if((playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") || (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") || (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"))
	{
		result = " You WIN.. " + playerSelection + " beats " + computerSelection + " .. " ;
		youWin = ++youWin ;

		image.setAttribute('src' , 'styles/happy.png');
		res.textContent = "YOU WIN!" ;
		head.textContent = playerSelection + " beats " + computerSelection;
	}

	else if(playerSelection.toLowerCase() == computerSelection)
	{
		result = "It's a DRAW.."
		image.setAttribute('src' , 'styles/blank.png');
		res.textContent = "IT'S A DRAW!"
		head.textContent = "both choose " + playerSelection ;
	}
	else
	{
		result = " You LOSE.. " + computerSelection + " beats " + playerSelection + " .." ;
		youLose = ++youLose ;
		image.setAttribute('src' , 'styles/sad.png');
 		res.textContent = "YOU LOSE!"
		head.textContent = computerSelection + " beats " + playerSelection;
	}


	let score = document.querySelector('#uScore');
	let compScore = document.querySelector('#compScore');
	score.textContent =  parseInt(youWin) ;
	compScore.textContent =  parseInt(youLose) ;


	if (youWin >= 5)
	{ alert("YOU ARE THE UTIMATE WINNER!!!!");
	  youWin = 0 ; youLose = 0;
	  res.textContent = "NEW GAME";
	  score.textContent = 0
	  compScore.textContent = 0
	  image.setAttribute('src' , 'styles/hello.png');
		head.textContent = "-";
	}
	else if (youLose >= 5)
	{ alert("A.I. IS THE BEST AFTERALL!!!!");
	  youWin = 0 ; youLose = 0;
	  res.textContent = "NEW GAME";
	  score.textContent = 0
	  compScore.textContent = 0
	  image.setAttribute('src' , 'styles/hello.png');
		head.textContent = "-";
	}

	return result;
}
