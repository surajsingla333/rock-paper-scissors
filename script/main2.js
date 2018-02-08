let num = 3, youWin = 0 , youLose = 0 ;

let option ;
const playerChoice = document.querySelectorAll('.choose');
playerChoice.forEach( (button) => { 
	 button.addEventListener('click', () => {
	 
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

	let res = document.querySelector('h4');

	let image = document.querySelector('#showEmoji');

	computerSelection = computerPlay();	
	let result ;
	let head = document.querySelector('h3');
	    head.textContent = null;

   	if((playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") || (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") || (playerSelection.toLowerCase() == "paper" && computerSelection == "rock")) 
	{ 
		result = " You WIN.. " + playerSelection + " beats " + computerSelection + " .. " ; 
		youWin = ++youWin ; 
		
		image.setAttribute('src' , 'styles/happy.png');
		res.textContent = "YOU WIN!!!" ;
	}

	else if(playerSelection.toLowerCase() == computerSelection) 
	{
		result = "It's a DRAW.."  
		image.setAttribute('src' , 'styles/blank.png');
		res.textContent = "IT'S A DRAW!!!"
	}
	else 
	{
		result = " You LOSE.. " + computerSelection + " beats " + playerSelection + " .." ; 
		youLose = ++youLose ; 
		image.setAttribute('src' , 'styles/sad.png');
		res.textContent = "YOU LOSE!!!"
	}
	
	
	let score = document.querySelector('#uScore');
	let compScore = document.querySelector('#compScore');
	score.textContent =  parseInt(youWin) ; 
	compScore.textContent =  parseInt(youLose) ; 

	
	if (youWin >= 5)
	{ alert("YOU ARE THE UTIMATE WINNER!!!!");
	  youWin = 0 ; youLose = 0; 	
	  head.textContent = "NEW GAME";
	  score.textContent = 0
	  compScore.textContent = 0
	  image.setAttribute('src' , 'styles/hello.png');
	  res.textContent = null;
	}
	else if (youLose >= 5)
	{ alert("A.I. IS THE BEST AFTERALL!!!!");
	  youWin = 0 ; youLose = 0;
	  head.textContent = "NEW GAME";
	  score.textContent = 0
	  compScore.textContent = 0
	  image.setAttribute('src' , 'styles/hello.png');
	  res.textContent = null;
	}

	return result; 
}	

/*function game()  
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
}*/
