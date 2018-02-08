let num = 3, youWin = 0 , youLose = 0 ;

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
	computerSelection = computerPlay();
	let result ;
   	if((playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") || (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") || (playerSelection.toLowerCase() == "paper" && computerSelection == "rock")) 
	{ 
		result = " You WIN.. " + playerSelection + " beats " + computerSelection + " .. " ; 
		youWin = ++youWin ; 
	}
	else if(playerSelection.toLowerCase() == computerSelection) result = "It's a DRAW.."  
	else 
	{
		result = " You LOSE.. " + computerSelection + " beats " + playerSelection + " .." ; 
		youLose = ++youLose ; 
	}

	return result ;
}	

function game()  
{
	youWin = 0 ; youLose = 0;
	let para = document.querySelector('p')
	for(i=1 ; i<=5 ; i++) 
	{  
		playRound(playerSelection = prompt() , computerPlay()) ;  
		para.textContent = para.textContent + " </br> " + " choice " + i + " is " + playerSelection + " ." ;
	}
	if (youWin > youLose) return "You\'re the Winner with " + youWin + " wins...";
	else if (youWin < youLose) return "You\'re the Losser with " + youLose + " losses...";
	else return "It's a Draw..."		
}
